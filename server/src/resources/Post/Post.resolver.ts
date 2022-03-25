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
import {Post } from "./Post.entity"
import { Context } from "interfaces/context.interface";
import { PostInput } from "./inputs/Post-input.model"
import { PostOutput } from "./outputs/Post-output.model"
import { successOutput } from "./outputs/success-output.model";


@Resolver()
export class PostResolver {
    constructor(){}

    @Mutation((returns) => successOutput, { nullable: true })
    async makePosts(
        @Arg("input", { nullable: true }) args: PostInput,
        @Ctx() { user: currentUser, ogm }: Context,
    ): Promise<PostOutput>{
        console.log("Hello");
        const { content } = args;

        const PostOGM = ogm.model("Post");
        console.log(PostOGM);
      // const post =  new Post({ content:content! })
       let output = await PostOGM.create({
           input:[
               {
                   content
               }
           ]
       })

        return {content};
    }

}