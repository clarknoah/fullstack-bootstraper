import { Field, InputType} from "type-graphql";
import { IsString } from "class-validator";

@InputType()
export default class ResetPasswordInput {
  @Field()
  @IsString()
  email!: string;

  @Field()
  @IsString()
  password!: string;


  @Field()
  @IsString()
  token!: string;
}
