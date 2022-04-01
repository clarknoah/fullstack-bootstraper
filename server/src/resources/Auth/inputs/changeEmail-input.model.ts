import { Field, InputType} from "type-graphql";
import { IsString, IsEmail } from "class-validator";

@InputType()
export default class ChangeEmailInput {
  @Field()
  @IsEmail()
  newEmail!: string;
}
