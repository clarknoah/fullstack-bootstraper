import { Field, InputType } from "type-graphql";
import { IsEmail, IsString } from "class-validator";

@InputType()
export default class SignupInput {
  @Field()
  @IsEmail()
  email!: string;

  @Field()
  @IsString()
  password!: string;


}
