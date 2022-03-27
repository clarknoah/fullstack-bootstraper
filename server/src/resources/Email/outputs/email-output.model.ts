import { Field, ID, ObjectType, registerEnumType } from "type-graphql";
import { Email } from "../Email.entity";

@ObjectType()
export default class EmailOutput {
  @Field()
  field!: field;
}
