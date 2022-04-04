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
import {Role } from "./Role.entity"
import { Context } from "interfaces/context.interface";
import { RoleInput } from "./inputs/Role-input.model"


@Resolver((of: any) => Role)
export class RoleResolver {
    constructor(){}

    @Query((returns) => Role, { nullable: true })
    async Roles(
        @Arg("input", { nullable: true }) args: RoleInput,
        @Ctx() { user: currentUser, ogm }: Context,
    ): Promise<Role>{

        const User = ogm.model("User");

        return await User.find({
            where:{
                email:"noahbc08@gmail.com"
            }
        })
    }

}