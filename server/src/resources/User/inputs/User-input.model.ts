import { Field, InputType} from "type-graphql";
import { IsString } from "class-validator";
import { User } from "../User.entity";

@InputType()
export default class UserInput {
  @Field()
  @IsString()
  field!: string;
}
