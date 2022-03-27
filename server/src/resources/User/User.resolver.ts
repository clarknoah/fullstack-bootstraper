import {
  Arg,
  Ctx,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { User } from "./User.entity"
import { Context } from "interfaces/context.interface";
import { UserOutput } from "./outputs/User-output.model";
import UserInput from "./inputs/User-input.model";
@Resolver(of => User)
export class UserResolver {


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


}