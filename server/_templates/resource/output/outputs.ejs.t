---
to: src/resources/<%= name %>/outputs/<%= output %>-output.model.ts
---
import { Field, ObjectType} from "type-graphql";
import { <%= name %> } from "../<%= name %>.entity";

@ObjectType()
export class <%= output %>Output {
  @Field()
  field!: string;
}
