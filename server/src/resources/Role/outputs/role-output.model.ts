import { Field, ID, ObjectType, registerEnumType } from "type-graphql";
import { Role } from "../Role.entity";

@ObjectType()
export default class RoleOutput {
  @Field()
  field!: field;
}
