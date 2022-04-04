import { Field, ID, ObjectType, registerEnumType, InputType } from "type-graphql";
import { IsString } from "class-validator";

@InputType()
export default class RoleInput {
  @Field()
  @IsString()
  field?: string;
}
