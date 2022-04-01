import { Field, InputType} from "type-graphql";
import { IsString } from "class-validator";

@InputType()
export default class SubmitResetPasswordInput {
  @Field()
  @IsString()
  email!: string;
}
