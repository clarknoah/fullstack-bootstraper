import { Field, InputType } from "type-graphql";
import { IsInt } from "class-validator";

@InputType()
export class UserInput {
  @Field()
  @IsInt()
  userId!: number;
}
