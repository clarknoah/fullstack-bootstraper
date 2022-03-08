import { Field, ID, ObjectType, registerEnumType, InputType } from "type-graphql";
import { IsString, IsInt } from "class-validator";

@InputType()
export class PostInput {
  @Field((type: any) => String)
  @IsString()
  content?: string;

}
