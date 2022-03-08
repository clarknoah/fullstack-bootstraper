import { Field, ID, ObjectType, registerEnumType } from "type-graphql";
import { User } from "../User.entity";

@ObjectType()
export class signUpSuccessOutput {
  @Field(type => Boolean)
  success!: boolean;
}
