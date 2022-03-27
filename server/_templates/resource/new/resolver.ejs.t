---
to: src/resources/<%= name %>/<%= h.changeCase.lcFirst(name) %>.resolver.ts
---
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
import {<%= name %> } from "./<%= name %>.entity"
import { Context } from "interfaces/context.interface";
import { <%= name %>Input } from "./inputs/<%= name %>-input.model"


@Resolver((of: any) => <%= name %>)
export class <%= name %>Resolver {
    constructor(){}

    @Query((returns) => <%= name %>, { nullable: true })
    async <%= name %>s(
        @Arg("input", { nullable: true }) args: <%= name %>Input,
        @Ctx() { user: currentUser, ogm }: Context,
    ): Promise<<%= name %>>{

        const User = ogm.model("User");

        return await User.find({
            where:{
                email:"noahbc08@gmail.com"
            }
        })
    }

}