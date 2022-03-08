import { Field, ID, ObjectType} from "type-graphql";

@ObjectType()
export class PostOutput {
  @Field()
  content?: string;
}
