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
import { Auth } from "./Auth.entity"
import { Context } from "interfaces/context.interface";
import LoginInput from "./inputs/login-input.model";
import RefreshTokenInput from "./inputs/RefreshToken-input.model";
import { verifyPassword, hashPassword } from "utils/password";
import SignUpSuccessOutput from "./outputs/success-output.model";
import { generateAuthToken, generateAccessKey, generateRefreshToken, generateAllTokens } from "utils/jwt";
import LoginSuccessOutput from "resources/Auth/outputs/loginSuccess-output.model";
import SignupInput from "resources/Auth/inputs/signup-input.model";
import { verify } from "middleware/authentication";
import { authorized } from "middleware/authentication";

@Resolver((of: any) => Auth)
export class AuthResolver {

    @Mutation((returns) => SignUpSuccessOutput, { nullable: true })
    async signUp(
        @Arg("input", { nullable: true }) args: SignupInput,
        @Ctx() { user: currentUser, ogm }: Context,
    ): Promise<SignUpSuccessOutput> {
        const { email, password } = args;

        //Ensure password meets requirements 
        //Ensure email doesn't already exist

        const User = ogm.model("User");

        const user = await User.create({
            input: [{
                email,
                password: await hashPassword(password)
            }]
        })

        console.log(user);

        return { success: true }
    }

    @Mutation((returns) => LoginSuccessOutput, { nullable: true })
    async login(
        @Arg("input", { nullable: true }) args: LoginInput,
        @Ctx() { user: currentUser, ogm }: Context,
    ): Promise<LoginSuccessOutput> {
        try {

            const { email, password } = args;

            const User = ogm.model("User");

            let user = await User.find({
                where: {
                    email
                }
            })

            if (!user.length) {
                throw new Error("User not found");
            }

            const isValid = await verifyPassword(password, user[0].password);

            if (!isValid) {
                throw new Error("Invalid Password");
            }


            const { id, password: pw } = user[0];
            const allTokens = generateAllTokens({
                userId: id,
                passwordHash: pw
            })

            return allTokens;

        } catch (err: any) {
            throw new Error(err);
        }
    }


    @Mutation((returns) => LoginSuccessOutput, { nullable: true })
    async refreshToken(
        @Arg("input") args: RefreshTokenInput,
        @Ctx() context: Context,
    ): Promise<LoginSuccessOutput> {
        const { refreshToken, accessToken, accessKey } = args;
        // Verify User's Refresh Token is Valid

        const user = await verify(
            context
        );
        
        if(!user){
            throw new Error("User not found");
        }

        const {id, email, password} = user[0];

        console.log(user[0])

        const {
            accessKey: generatedAccessKey,
            accessToken: generatedAccessToken,
            authRefreshToken: generatedRefreshToken,
        } = await generateRefreshToken({
            refreshToken,
            payload: {
                userId: id,
                email: email,
                password: password,
                accessKey: accessKey,
                accessToken: accessToken
            },
        });


        return {
            accessToken: generatedAccessToken,
            refreshToken: generatedRefreshToken,
            accessKey: generatedAccessKey
        };
    }
}