import { Field, ID, ObjectType, registerEnumType, InputType } from "type-graphql";
import { IsString } from "class-validator";

@InputType()
export default class EmailInput {
  @Field()
  @IsString()
  field?: string;
}
