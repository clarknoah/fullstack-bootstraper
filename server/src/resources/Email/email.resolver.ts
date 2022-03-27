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
import {Email } from "./Email.entity"
import { Context } from "interfaces/context.interface";
import { EmailInput } from "./inputs/Email-input.model"


@Resolver((of: any) => Email)
export class EmailResolver {
    constructor(){}

    @Query((returns) => Email, { nullable: true })
    async Emails(
        @Arg("input", { nullable: true }) args: EmailInput,
        @Ctx() { user: currentUser, ogm }: Context,
    ): Promise<Email>{

        const User = ogm.model("User");

        return await User.find({
            where:{
                email:"noahbc08@gmail.com"
            }
        })
    }

}