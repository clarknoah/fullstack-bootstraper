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
import {User } from "./User.entity"
import { Context } from "interfaces/context.interface";
import { UserInput } from "./inputs/User-input.model"


@Resolver((of: any) => User)
export class UserResolver {
    constructor(){}

    @Query((returns) => User, { nullable: true })
    async Users(
        @Arg("input", { nullable: true }) args: UserInput,
        @Ctx() { user: currentUser, ogm }: Context,
    ): Promise<User>{

        const User = ogm.model("User");

        return await User.find({
            where:{
                email:"noahbc08@gmail.com"
            }
        })
    }

}