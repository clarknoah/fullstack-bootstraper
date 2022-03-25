import { Field, ID, ObjectType, registerEnumType, Directive } from "type-graphql";
import { User } from "resources/User/User.entity";
import { v4 as uuidv4 } from 'uuid';


@ObjectType()
@Directive(`@fulltext(indexes: [{ name: "PostContent", fields: ["content"] }])`)
export class Post {

    @Directive('@id')
    @Field(type=>ID)
    id!: string;

    @Field()
    content!: string;


    // @Directive(`@relationship(type: "CREATED_POST", direction: IN)`)
    // @Field(type => User)
    // createdPost!: User;

    @Directive(`@relationship(type: "CREATED", direction: IN)`)
    @Field(type => User)
    createdBy!: User;

    @Directive("@timestamp(operations: [CREATE])")
    @Field(type => Date)
    createdAt!: string;

    // @Field(type=>ID)
    // createdBy!: string;

    // @Field(type=>ID)
    // modifiedBy!: string;

    @Directive("@timestamp(operations: [CREATE, UPDATE])")
    @Field(type => Date)
    lastModifiedAt!: string;

    @Field(type => Date, {nullable: true})
    deletedAt?: string;

    @Field(type => ID, {nullable: true})
    deletedBy?: string;
}
