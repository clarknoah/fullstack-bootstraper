---
to: src/resources/<%= name %>/outputs/<%= h.inflection.camelize(output, lower) %>-output.model.ts
---
import { Field, ObjectType} from "type-graphql";
import { <%= name %> } from "../<%= name %>.entity";

@ObjectType()
export default class <%= output %>Output {
  @Field()
  field!: string;
}
