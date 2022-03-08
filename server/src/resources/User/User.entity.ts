import { Field, ID, ObjectType, registerEnumType, Directive } from "type-graphql";
import {Post} from "resources/Post/Post.entity";
import { v4 as uuidv4 } from 'uuid';

@ObjectType()
export class User {

    @Directive('@id')
    @Field(type=>ID)
    id!: string;

    @Directive('@private')
    @Field(type=>String)
    password!: string;

    @Field()
    email!: string;

    @Directive("@timestamp(operations: [CREATE])")
    @Field()
    createdAt!: number;

    @Directive("@timestamp(operations: [CREATE, UPDATE])")
    lastModifiedAt!: number;

    @Field(type=>ID)
    lastModifiedBy!: string;

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


    constructor(input: {
        email: string;
       // createdAt?: number;
        createdBy?: number;
       // modifiedAt?: number;
        modifiedBy? : number;

    }) {
        this.id = uuidv4();
        this.email = input.email;
    }

}
