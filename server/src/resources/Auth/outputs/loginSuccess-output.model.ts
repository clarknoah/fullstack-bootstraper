import { Field, ObjectType} from "type-graphql";


@ObjectType()
export default class LoginSuccessOutput {
  @Field()
  accessToken!: string;

  @Field()
  refreshToken!: string;

  @Field({nullable: true})
  accessKey?: string;
}
