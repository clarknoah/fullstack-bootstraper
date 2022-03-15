import {
  Arg,
  Ctx,
  FieldResolver,
  Info,
  Mutation,
  Query,
  Resolver,
  Root,
  UseMiddleware,
} from "type-graphql";
import { User } from "./User.entity"
import { Context } from "interfaces/context.interface";
import { UserInput } from "./inputs/User-input.model"
import { UserOutput } from "./outputs/User-output.model";
import { signUpSuccessOutput } from "./outputs/success-output.model";
import { loginSuccessOutput } from "resources/Auth/outputs/loginSuccess-output.model";
import { verifyPassword, hashPassword } from "utils/password";
import { generateAuthToken, generateAccessKey, generateRefreshToken } from "utils/jwt";
import { JwtType } from "utils/jwt";
import { loginInput } from "./inputs/login-input.model";
import { RefreshTokenInput } from "./inputs/RefreshToken-input.model";
@Resolver(of => User)
export class UserResolver {
    constructor(){}

    @Query((returns) => UserOutput, { nullable: true })
    async getUsers(
        @Arg("input", { nullable: true }) args: UserInput,
        @Ctx() { user: currentUser, ogm }: Context,
    ): Promise<UserOutput>{

        const User = ogm.model("User");

        // return await User.find({
        //     where:{
        //         email:"noahbc08@gmail.com"
        //     }
        // })
        return {id: "hi"};
    }

    @Mutation((returns) => signUpSuccessOutput, { nullable: true })
    async signUp(
        @Arg("input", { nullable: true }) args: UserInput,
        @Ctx() { user: currentUser, ogm }: Context,
    ): Promise<signUpSuccessOutput>{
        //Ensure password meets requirements 
        //Ensure email doesn't already exist
        
        //const User = ogm.model("User");

        return {success: true}
    }

    @Mutation((returns) => loginSuccessOutput, { nullable: true })
    async login(
        @Arg("input", { nullable: true }) args: loginInput,
        @Ctx() { user: currentUser, ogm }: Context,
    ): Promise<loginSuccessOutput>{
        let authUser = {
            id: 1
        }
        //Receive User/pass


        // Verify that User Pass matches Database verifyPassword()

        // Return JSON Web Token if they are logged in

        let accessToken = generateAuthToken({
            payload: { userId: `${1}` },
            jwtType: JwtType.access,
          });
        let refreshToken = generateAuthToken({
            payload: { userId: `${authUser?.id}` },
            jwtType: JwtType.refresh,
          });
    
        const accessKey = await generateAccessKey({
            password:"123",
           // password: hashedPass!,
            authProfileToken: accessToken,
            userId: `${authUser?.id}`,
          });

        return { accessToken, refreshToken, accessKey };
    }

    @Mutation((returns) => loginSuccessOutput, { nullable: true })
    async refreshToken(
        @Arg("input" ) args: RefreshTokenInput,
        @Ctx() { user: currentUser, ogm }: Context,
    ): Promise<loginSuccessOutput>{
        const { refreshToken, accessToken, accessKey } = args;
        // Verify User's Refresh Token is Valid
        console.log("Hello wrodl")

        const {
            accessKey: generatedAccessKey,
            accessToken: generatedAccessToken,
            authRefreshToken: generatedRefreshToken,
          } = await generateRefreshToken({
            refreshToken,
            payload: {
              userId: "1",
              email: "test.com",
              password: "123",
              accessKey: accessKey,
              accessToken: accessToken
            },
          });


        return { 
            accessToken: generatedAccessToken, 
            refreshToken: generatedRefreshToken, 
            accessKey:generatedAccessKey 
        };
    }

}