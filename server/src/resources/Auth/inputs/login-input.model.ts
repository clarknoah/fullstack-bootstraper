import { Field, InputType} from "type-graphql";
import { IsInt } from "class-validator";

@InputType()
export default class LoginInput {
  @Field(type => String)
  email!: string;

  @Field(type => String)
  password!: string;
}
