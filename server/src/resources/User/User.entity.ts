import { Field, ID, ObjectType, registerEnumType } from "type-graphql";

@ObjectType()
export class User {

    @Field()
    email!: string;

    @Field()
    createdAt!: number;

    @Field()
    createdBy!: number;

    @Field()
    modifiedAt!: number;

    @Field()
    modifiedBy!: number;

    @Field({ nullable: true })
    deletedAt?: number;

    @Field({ nullable: true })
    deletedBy?: number;

    constructor(input: {
        email: string;
        createdAt?: number;
        createdBy?: number;
        modifiedAt?: number;
        modifiedBy? : number;

    }) {
        this.email = input.email;
        this.createdAt = input.createdAt || Date.now();
        this.createdBy = input.createdBy || 1;
        this.modifiedAt = input.modifiedAt || Date.now();
        this.modifiedBy = input.modifiedBy || 1;
    }

}
