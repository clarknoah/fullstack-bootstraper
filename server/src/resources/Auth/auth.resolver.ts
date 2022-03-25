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
import {Auth } from "./Auth.entity"
import { Context } from "interfaces/context.interface";
import  LoginInput from "./inputs/login-input.model";
import RefreshTokenInput from "./inputs/RefreshToken-input.model";
import { verifyPassword, hashPassword } from "utils/password";
import  SignUpSuccessOutput from "./outputs/success-output.model";
import { generateAuthToken, generateAccessKey, generateRefreshToken, generateAllTokens } from "utils/jwt";
import LoginSuccessOutput from "resources/Auth/outputs/loginSuccess-output.model";
import SignupInput from "resources/Auth/inputs/signup-input.model";
@Resolver((of: any) => Auth)
export class AuthResolver {

    @Mutation((returns) => SignUpSuccessOutput, { nullable: true })
    async signUp(
        @Arg("input", { nullable: true }) args: SignupInput,
        @Ctx() { user: currentUser, ogm }: Context,
    ): Promise<SignUpSuccessOutput>{
        const { email, password } = args;

        //Ensure password meets requirements 
        //Ensure email doesn't already exist
        
        const User = ogm.model("User");

        const user = await User.create({
          input:[{
            email,
            password: await hashPassword(password)
          }]
        })

        console.log(user);

        return {success: true}
    }

    @Mutation((returns) => LoginSuccessOutput, { nullable: true })
    async login(
        @Arg("input", { nullable: true }) args: LoginInput,
        @Ctx() { user: currentUser, ogm }: Context,
    ): Promise<LoginSuccessOutput>{
        const { email, password } = args;
        let authUser = {
            id: 1
        }
        //Receive User/pass




        // Verify that User Pass matches Database verifyPassword()

        // Return JSON Web Token if they are logged in
       const User = ogm.model("User");

         const user = await User.find({
             where:{
                 email
             }
         })
        
        if(!user.length){
            throw new Error("User not found");
        }
        console.log(user);
        const isValid = await verifyPassword(password, user[0].password);
        console.log(isValid);
        const allTokens = generateAllTokens({
          userId: "1",
          passwordHash: "123"
        })

        return allTokens;
    }


    @Mutation((returns) => LoginSuccessOutput, { nullable: true })
    async refreshToken(
        @Arg("input" ) args: RefreshTokenInput,
        @Ctx() { user: currentUser, ogm }: Context,
    ): Promise<LoginSuccessOutput>{
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