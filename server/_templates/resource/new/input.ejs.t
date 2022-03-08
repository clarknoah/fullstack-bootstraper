---
to: src/resources/<%= name %>/inputs/<%= name %>-input.model.ts
---
import { Field, ID, ObjectType, registerEnumType, InputType } from "type-graphql";
import { IsString } from "class-validator";

@InputType()
export class <%= name %>Input {
  @Field()
  @IsString()
  field?: string;
}
