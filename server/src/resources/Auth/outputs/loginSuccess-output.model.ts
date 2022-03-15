import { Field, ObjectType} from "type-graphql";


@ObjectType()
export class loginSuccessOutput {
  @Field()
  accessToken!: string;

  @Field()
  refreshToken!: string;

  @Field({nullable: true})
  accessKey?: string;
}
