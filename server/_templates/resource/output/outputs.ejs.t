import { IsInt } from "class-validator";
import { ID, Field, InputType } from "type-graphql";

@InputType()
export class UserInput {
  @Field((type: any) => ID)
  @IsInt()
  userId: number;
}
