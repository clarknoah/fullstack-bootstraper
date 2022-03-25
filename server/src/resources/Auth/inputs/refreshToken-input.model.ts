import { Field, InputType} from "type-graphql";
import { IsString } from "class-validator";


@InputType()
export default class RefreshTokenInput {
  @Field(type=>String)
  @IsString()
  accessToken!: string;

  @Field(type=>String)
  @IsString()
  refreshToken!: string;

  @Field(type=>String)
  @IsString()
  accessKey!: string;
}
