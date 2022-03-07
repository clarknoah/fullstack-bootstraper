---
to: src/resources/<%= name %>/outputs/<%= name %>-output.model.ts
---
import { Field, ID, ObjectType, registerEnumType } from "type-graphql";
import { <%= name %> } from "../<%= name %>.entity";

@ObjectType()
export class UserQueryOutput {
  @Field((type) => QueryMetadata)
  metadata: QueryMetadata;

  @Field((type) => [User])
  @Column()
  data: User[];
}
