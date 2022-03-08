import { Field, ID, ObjectType, registerEnumType } from "type-graphql";
import { Post } from "../Post.entity";

@ObjectType()
export class successOutput {
  @Field(type => Boolean)
  boolean!: boolean;
}
