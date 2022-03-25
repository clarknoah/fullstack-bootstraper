import { Field, ID, ObjectType, registerEnumType } from "type-graphql";
import { User } from "../../User/User.entity";

@ObjectType()
export default class SignUpSuccessOutput {
  @Field(type => Boolean)
  success!: boolean;
}
