---
to: src/resources/<%= name %>/inputs/<%= h.changeCase.lcFirst(input) %>-input.model.ts
---
import { Field, InputType} from "type-graphql";
import { IsString } from "class-validator";
import { <%= name %> } from "../<%= name %>.entity";

@InputType()
export default class <%= input %>Input {
  @Field()
  @IsString()
  field!: string;
}
