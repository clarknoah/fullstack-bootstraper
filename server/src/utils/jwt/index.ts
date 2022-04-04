import { env } from "config/globals";
import jsonwebtoken, { NotBeforeError, TokenExpiredError } from "jsonwebtoken";
import { NotAuthenticatedError, InternalServerError } from "utils/errors";
import {
    hashPassword,
    verifyPassword,
  } from "utils/password";

  export enum JwtType {
    access = "access",
    refresh = "refresh",
  }
  
  interface IUserPayload {
    userId: string;
  }

  interface UserAuthProfile {
    userId: string,
    passwordHash: string,
    email?: string,
    roles?: string[]
  }
  
  interface IGenerateAccessKeyArgs extends IUserPayload {
    password: string;
    authProfileToken: string;
  }
  
  interface IAuthPayload extends IUserPayload {
    email?: string;
    password?: string;
    accessKey?: string;
    accessToken?: string;
    roles?: string[];
  }
  
  interface IVerifyJwtArgs {
    token?: string;
    jwtType: JwtType;
  }
  
  interface IRefreshTokenValidityArgs {
    payload: IAuthPayload;
  }
  
  interface IJwtArgs extends IVerifyJwtArgs {
    payload: IAuthPayload;
    refreshToken?: string;
  }
  
  interface IRefreshTokenArgs {
    payload: IAuthPayload;
    refreshToken?: string;
  }

const getJwtTokenSecret = (jwtType = JwtType.access) => {
    let jwtSignOptions: string = env.JWT_TOKEN_SECRET;
  
    if (jwtType === JwtType.refresh) {
      jwtSignOptions = env.REFRESH_JWT_TOKEN_SECRET;
    }
  
    return jwtSignOptions;
  };

export const generateAuthToken = ({ payload, jwtType }: IJwtArgs): string => {
    const jwtSignOptions = getJwtTokenSecret(jwtType);
    try {
      return jsonwebtoken.sign(payload, jwtSignOptions, {
        ...(jwtType === JwtType.access ? env.JWT_TOKEN! : env.REFRESH_JWT_TOKEN!),
      });
    } catch (err: any) {
        throw new NotAuthenticatedError({
            message: err.message,
            data: {},
          });
    }
  };

const checkRefreshTokenValidity = async ({
    payload,
  }: IRefreshTokenValidityArgs) => {
    const authProfileKey: string = payload.accessKey || "";
    const authProfileToken: string = payload.accessToken || "";
    const userId = payload?.userId ?? "";
    const password = payload?.password ?? "";
    const isKeyValid = await verifyPassword(
      `${userId}${password}${authProfileToken}`,
      authProfileKey
    );
  
    if (!isKeyValid) {
      throw new NotAuthenticatedError({
        message: "Refresh token has been invalidated",
        data: {},
      });
    }
  
    return isKeyValid;
  };

export const generateAccessKey = async ({
    userId,
    password,
    authProfileToken,
  }: IGenerateAccessKeyArgs) => {
    return hashPassword(`${userId}${password}${authProfileToken}`);
};

export const generateAllTokens = async ({
  userId, passwordHash, email, roles
}: UserAuthProfile ) => {

    const accessToken = generateAuthToken({
        payload: { userId, email, roles},
        jwtType: JwtType.access,
      })

    const refreshToken = generateAuthToken({
        payload: { userId, email, roles },
        jwtType: JwtType.refresh,
      })
      
    const accessKey = await generateAccessKey({
        userId,
        password: passwordHash,
        authProfileToken: accessToken,
      })
    
      return {accessToken, refreshToken, accessKey};
    
  }


export const generateRefreshToken = async ({
    payload,
    refreshToken: token = "",
  }: IRefreshTokenArgs): Promise<any> => {
    await verifyToken({ token, jwtType: JwtType.refresh });
    await checkRefreshTokenValidity({ payload });
  
    const accessToken = generateAuthToken({
      payload: payload,
      jwtType: JwtType.access,
    });
    const authRefreshToken = generateAuthToken({
      payload: payload,
      jwtType: JwtType.refresh,
    });
  
    const authProfileToken: string = payload.accessToken || "";
    const userId = payload?.userId ?? "";
    const password = payload?.password ?? "";
  
    const accessKey = await generateAccessKey({
      userId,
      password,
      authProfileToken,
    });
  
    return { accessToken, authRefreshToken, accessKey };
  };
  

export const verifyToken = async ({
    token = "",
    jwtType = JwtType.access,
  }: IVerifyJwtArgs): Promise<string | object> => {
    const jwtSignOptions = getJwtTokenSecret(jwtType);
  
    try {
      return jsonwebtoken.verify(token, jwtSignOptions);
    } catch (err) {
      // Catch and Propagate Token Error
      if (err instanceof TokenExpiredError) {
        //
        throw new NotAuthenticatedError({
          message: "Provided token is expired",
          data: {},
        });
      } else if (err instanceof NotBeforeError) {
        throw new NotAuthenticatedError({
          message: `provided token cannot be used before ${err.date.toISOString()}`,
          data: {},
        });
      } else {
        throw new InternalServerError({
          message: "Refresh token is invalid",
          data: {},
        });
      }
    }
  };