---
to: src/resources/<%= name %>/inputs/<%= name %>-input.model.ts
---
import { Field, ID, ObjectType, registerEnumType } from "type-graphql";
import { IsInt } from "class-validator";

@InputType()
export class <%= name %>Input {
  @Field((type: any) => Date)
  @IsInt()
  userId: number;
}
