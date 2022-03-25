---
to: src/resources/<%= name %>/inputs/<%= h.changeCase.camelize(name) %>-input.model.ts
---
import { Field, ID, ObjectType, registerEnumType, InputType } from "type-graphql";
import { IsString } from "class-validator";

@InputType()
export default class <%= name %>Input {
  @Field()
  @IsString()
  field?: string;
}
