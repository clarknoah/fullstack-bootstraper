import { Field, InputType } from "type-graphql";
import { IsEmail, IsString, Validate } from "class-validator";
import { IsValidPassword } from "utils/validators/password.validator";
@InputType()
export default class SignupInput {
  @Field()
  @IsEmail()
  email!: string;

  @Field()
  //@Validate(IsValidPassword)
  password!: string;


}
