---
to: src/resources/<%= name %>/<%= name %>.entity.ts
---
import { Field, ID, ObjectType, registerEnumType } from "type-graphql";

@ObjectType()
export class <%= name %> {


    @Field((type)=> Date)
    createdAt!: Date;

    @Field((type)=> ID)
    createdBy!: number;

    @Field()
    modifiedAt!: Date;

    @Field((type)=> ID)
    modifiedBy!: number;

    @Field()
    deletedAt!: Date;

    @Field((type)=> ID)
    deletedBy!: number;

    constructor(input: {
        createdAt?: Date;
        createdBy: number;
        modifiedAt?: Date;
        modifiedBy: number;

    }) {
        this.createdAt = input.createdAt || new Date();
        this.createdBy = input.createdBy;
        this.modifiedAt = input.modifiedAt || new Date();
        this.modifiedBy = input.modifiedBy;
    }

}
