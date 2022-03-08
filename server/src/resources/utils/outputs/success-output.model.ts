import { Field, ObjectType} from "type-graphql";

@ObjectType()
export class successOutput {
  @Field(type => Boolean)
  boolean!: boolean;
}
