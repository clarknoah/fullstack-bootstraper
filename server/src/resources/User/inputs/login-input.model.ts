import { Field, InputType} from "type-graphql";
import { IsInt } from "class-validator";

@InputType()
export class loginInput {
  @Field({nullable: true})
  field?: string;
}
