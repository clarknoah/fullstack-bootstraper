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

        //const User = ogm.model("User");

        return {success: true}
    }

}