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
import RefreshTokenInput from "./inputs/refreshToken-input.model";
import { verifyPassword, hashPassword } from "utils/password";
import SignUpSuccessOutput from "./outputs/success-output.model";
import { generateAuthToken, generateAccessKey, generateRefreshToken, generateAllTokens, verifyToken } from "utils/jwt";
import LoginSuccessOutput from "resources/Auth/outputs/loginSuccess-output.model";
import SignupInput from "resources/Auth/inputs/signup-input.model";
import { verify } from "middleware/authentication";
import { authorized } from "middleware/authentication";
import { EmailService } from "services/email/email";
import { AccountStatus } from "resources/User/User.entity";
import { registrationTokenTemplate } from "services/email/templates/registration-token";
import VerifyEmailInput from "./inputs/verifyEmail-input.model";
import { randomUUID } from "crypto";
import { EmailVerificationError } from "utils/errors/";
import { registrationSuccessTemplate } from "services/email/templates/registrationSuccess";
import { passwordResetTemplate } from "services/email/templates/password-reset";
import SubmitResetPasswordInput from "./inputs/submitResetPassword-input.model";
import ResetPasswordInput from "./inputs/resetPassword-input.model";
import ChangeEmailInput from "./inputs/changeEmail-input.model";
import { changeEmailTemplate } from "services/email/templates/changeEmail";
import { JwtType } from "utils/jwt";

@Resolver((of: any) => Auth)
export class AuthResolver {

    @Mutation((returns) => SignUpSuccessOutput, { nullable: true })
    async signUp(
        @Arg("input", { nullable: true }) args: SignupInput,
        @Ctx() { user: currentUser, ogm }: Context,
    ): Promise<SignUpSuccessOutput> {
        try{
            const { email, password } = args;
            
            const User = ogm.model("User");

            const userExists = await User.find({
                where: {
                    email: email
                }
            })

            if (userExists.length) {
                throw new Error("User already exists");
            }
            //Ensure password meets requirements 

            //Ensure email doesn't already exist
    
            const inviteToken = randomUUID();
            const user = await User.create({
                input: [{
                    email,
                    password: await hashPassword(password),
                    accountStatus: AccountStatus.PENDING,
                    verificationToken: inviteToken,
                    roles: {
                        connect: {
                            where:{
                                node:{
                                    name_CONTAINS:"USER"
                                }
                            }
                        }
                    }
                }]
            })
    
            console.log(user);
    
            const mail = new EmailService();
            const emailTemplate = registrationTokenTemplate({ email, token: inviteToken });
            console.log(emailTemplate.body);
            await mail.sendEmail({
                to: [email],
                title: emailTemplate.title,
                body: emailTemplate.body
            });
    
            return { success: true }
        }catch(err){
            console.log(err);
            throw err;
        }
    }

    @Mutation((returns) => SignUpSuccessOutput, { nullable: true })
    async resetPassword(
        @Arg("input", { nullable: true }) args: ResetPasswordInput,
        @Ctx() { user: currentUser, ogm }: Context,
    ): Promise<SignUpSuccessOutput> {
        try {
            const { email, password, token } = args;

            //Ensure password meets requirements 
            //Ensure email doesn't already exist

            const User = ogm.model("User");

            const user = await User.find({
                where: {
                    email: email,
                    resetToken: token
                }
            })

            if (user.length
                && user[0].email === email
                && user[0].resetToken === token
            ) {
                const mail = new EmailService();


                await User.update({
                    where: {
                        id: user[0].id,
                        email: email,
                        resetToken: token
                    },
                    update: {
                        password: await hashPassword(password),
                        resetToken: ""
                    }
                })

                return { success: true }
            }

            throw new Error("Invalid token or user");

        } catch (e: any) {
            throw e;
        }
    }


    @UseMiddleware(
        authorized()
    )
    @Mutation((returns) => SignUpSuccessOutput, { nullable: true })
    async sendEmailChangeEmail(
        @Arg("input", { nullable: true }) args: ChangeEmailInput,
        @Ctx() { user, ogm }: Context,
    ): Promise<SignUpSuccessOutput> {
        try {
            const { newEmail } = args;

            //Ensure password meets requirements 
            //Ensure email doesn't already exist

            const User = ogm.model("User");


            if (user && user!.accountStatus === AccountStatus.ACTIVE) {
                const mail = new EmailService();

                const token = randomUUID();

                await User.update({
                    where: {
                        id: user.id
                    },
                    update: {
                        verificationToken: token,
                        pendingEmail: newEmail
                    }
                })

                const emailTemplate = changeEmailTemplate({ token });
                console.log(emailTemplate.body);
                await mail.sendEmail({
                    to: [newEmail],
                    title: emailTemplate.title,
                    body: emailTemplate.body
                });
            }


            return { success: true }
        } catch (e: any) {
            throw e;
        }
    }
    @Mutation((returns) => SignUpSuccessOutput, { nullable: true })
    async sendResetPasswordEmail(
        @Arg("input", { nullable: true }) args: SubmitResetPasswordInput,
        @Ctx() { user: currentUser, ogm }: Context,
    ): Promise<SignUpSuccessOutput> {
        try {
            const { email } = args;

            //Ensure password meets requirements 
            //Ensure email doesn't already exist

            const User = ogm.model("User");

            const user = await User.find({
                where: {
                    email: email
                }
            })

            if (user.length && user[0].email === email) {
                const mail = new EmailService();
                const token = randomUUID();

                await User.update({
                    where: {
                        id: user[0].id
                    },
                    update: {
                        resetToken: token
                    }
                })

                const emailTemplate = passwordResetTemplate({ token });
                console.log(emailTemplate.body);
                await mail.sendEmail({
                    to: [email],
                    title: emailTemplate.title,
                    body: emailTemplate.body
                });
            }


            return { success: true }
        } catch (e: any) {
            throw e;
        }
    }

    @Mutation((returns) => SignUpSuccessOutput, { nullable: true })
    async verifyNewEmail(
        @Arg("input", { nullable: true }) args: VerifyEmailInput,
        @Ctx() { user: currentUser, ogm }: Context,
    ): Promise<SignUpSuccessOutput> {
        try {
            const { token } = args;

            //Ensure password meets requirements 
            //Ensure email doesn't already exist

            const User = ogm.model("User");

            const user = await User.find({
                where: {
                    verificationToken: token
                }
            });

            if (!user.length) {
                throw new Error("User not found")
            }

            if (user[0].accountStatus == AccountStatus.ACTIVE) {


                const accountVerified = token === user[0].verificationToken;

                if (!accountVerified) {
                    throw new EmailVerificationError({
                        message: "Verification code is invalid",
                        data: {},
                    });
                }


                await User.update({
                    where: {
                        verificationToken: token
                    },
                    update: {
                        email: user[0].pendingEmail,
                        verificationToken: "",
                        pendingEmail: null
                    }
                })

            }

            return { success: true }
        } catch (e: any) {
            throw e;
        }
    }

    @Mutation((returns) => SignUpSuccessOutput, { nullable: true })
    async verifyRegistration(
        @Arg("input", { nullable: true }) args: VerifyEmailInput,
        @Ctx() { user: currentUser, ogm }: Context,
    ): Promise<SignUpSuccessOutput> {
        try {
            const { token } = args;

            //Ensure password meets requirements 
            //Ensure email doesn't already exist

            const User = ogm.model("User");

            const user = await User.find({
                where: {
                    verificationToken: token
                }
            })

            if (!user.length) {
                throw new Error("User not found")
            }

            if (user[0].accountStatus !== AccountStatus.PENDING) {
                throw new Error("User already verified")
            }

            const accountVerified = token === user[0].verificationToken;

            if (!accountVerified) {
                throw new EmailVerificationError({
                    message: "Verification code is invalid",
                    data: {},
                });
            }

            user[0].accountStatus = AccountStatus.ACTIVE;

            await User.update({
                where: {
                    id: user[0].id
                },
                update: {
                    accountStatus: AccountStatus.ACTIVE,
                    verificationToken: ""
                }
            })

            const mail = new EmailService();
            const emailTemplate = registrationSuccessTemplate();
            console.log(emailTemplate.body);
            await mail.sendEmail({
                to: [user[0].email],
                title: emailTemplate.title,
                body: emailTemplate.body
            });


            return { success: true }
        } catch (e: any) {
            throw e;
        }
    }

    @Mutation((returns) => LoginSuccessOutput, { nullable: true })
    async login(
        @Arg("input", { nullable: true }) args: LoginInput,
        @Ctx() { ogm }: Context,
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

            if (user[0].accountStatus !== AccountStatus.ACTIVE) {
                throw new EmailVerificationError({
                    message: "Email is not verified",
                    data: {},
                });
            }

            const isValid = await verifyPassword(password, user[0].password);

            if (!isValid) {
                throw new Error("Invalid Password");
            }


            const { id, password: pw } = user[0];
            const allTokens = await generateAllTokens({
                userId: id,
                passwordHash: pw
            })

            const token = await verifyToken({ token: allTokens.accessToken, jwtType: JwtType.access });
            console.log(token)
            return allTokens;

        } catch (err: any) {
            console.log(err);
            throw err;
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
        console.log(user);
        if (!user) {
            throw new Error("User not found");
        }

        const { id, email, password } = user;



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