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

    @Directive("@timestamp(operations: [CREATE])")
    @Field()
    createdAt!: number;

    @Directive("@timestamp(operations: [CREATE, UPDATE])")
    lastModifiedAt!: number;

    @Field()
    lastModifiedBy!: number;

    @Field({ nullable: true })
    deletedAt?: number;

    @Field({ nullable: true })
    deletedBy?: number;

    @Directive(`@relationship(type: "CREATED_POST", direction: IN)`)
    @Field(type => User)
    createdPost!: User;

    // @Directive(`User! @relationship(type: "CREATED", direction: IN`)
    // @Field(type=> User)
    // createdBy?: User

    constructor(input: {
        content: string;
        createdAt?: number;
        createdBy?: User;
        modifiedAt?: number;
        modifiedBy? : number;

    }) {
       // this.id = uuidv4();
        this.content = input.content;
       // this.createdAt = input.createdAt || Date.now();
        // this.createdBy = input.createdBy;
        //this.modifiedAt = input.modifiedAt || Date.now();
       // this.modifiedBy = input.modifiedBy || 1;
    }

}
