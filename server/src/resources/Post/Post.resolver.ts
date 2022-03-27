import {
  Arg,
  Ctx,
  Mutation,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { Context } from "interfaces/context.interface";
import { PostInput } from "./inputs/Post-input.model"
import { PostOutput } from "./outputs/Post-output.model"
import { authorized } from "middleware/authentication";

@Resolver()
export class PostResolver {
    constructor(){}


    @UseMiddleware(
        authorized()
      )
    @Mutation((returns) => PostOutput, { nullable: true })
    async makePost(
        @Arg("input", { nullable: true }) args: PostInput,
        @Ctx() { user: currentUser, ogm }: Context,
    ): Promise<PostOutput>{
        try{
            console.log("Hello");
            const { content } = args;
            console.log("User", currentUser);
            const PostOGM = await ogm.model("Post");
    
    
          // const post =  new Post({ content:content! })
          console.log("Things are wokring");

          let output = await PostOGM.create({
              input:[
                  {
                      content,
                      createdBy: {
                          connect: {
                              where: {node: {id: currentUser.id}}
                          }
                      }
                    }
                ]
            })
            console.log("Things are srtill workingwokring");
    
            return {content};
            
        }catch(err: any){
            throw new Error(err);
        }
    }

}