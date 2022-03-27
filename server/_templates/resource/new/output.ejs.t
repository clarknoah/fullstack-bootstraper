---
to: src/resources/<%= name %>/outputs/<%= h.changeCase.lcFirst(name) %>-output.model.ts
---
import { Field, ID, ObjectType, registerEnumType } from "type-graphql";
import { <%= name %> } from "../<%= name %>.entity";

@ObjectType()
export default class <%= name %>Output {
  @Field()
  field!: field;
}
