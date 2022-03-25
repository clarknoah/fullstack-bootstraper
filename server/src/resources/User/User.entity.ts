import { Field, ID, ObjectType, registerEnumType, Directive, GraphQLTimestamp } from "type-graphql";
import {Post} from "resources/Post/Post.entity";
import { v4 as uuidv4 } from 'uuid';



@ObjectType()
@Directive(`@node(label: "User")`)
export class User {

    @Directive('@id')
    @Field(type=>ID)
    id!: string;

    @Directive('@private')
    @Field(type=>String)
    password!: string;

    @Field()
    @Directive(`@unique`)
    email!: string;

    @Directive("@timestamp(operations: [CREATE])")
    @Field(type => Date)
    createdAt!: string;

    @Directive("@timestamp(operations: [CREATE, UPDATE])")
    @Field(type => Date)
    lastModifiedAt!: string;

    @Field(type=>ID, { nullable: true })
    lastModifiedBy?: string;

    @Field({ nullable: true })
    deletedAt?: number;

    @Field({ nullable: true })
    deletedBy?: number;


    @Directive(`@relationship(type: "CREATED", direction: OUT)`)
    @Field(type=> Post, { nullable: true })
    posts?: Post[]

    @Directive(`@relationship(type: "FRIENDS_WITH", direction: OUT)`)
    @Field(type=> User, {nullable: true})
    friends?: User[]



}
