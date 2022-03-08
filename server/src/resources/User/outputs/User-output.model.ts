import { Field, ID, ObjectType, registerEnumType } from "type-graphql";

@ObjectType()
export class UserOutput {
  @Field(type=>ID)
  id!: string;
}
