import { Field, ID, ObjectType, registerEnumType } from "type-graphql";
import { User } from "../User.entity";

@ObjectType()
export class UserQueryOutput {
  @Field((type) => QueryMetadata)
  metadata: QueryMetadata;

  @Field((type) => [User])
  @Column()
  data: User[];
}
