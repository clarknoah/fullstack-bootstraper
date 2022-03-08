---
to: src/resources/<%= name %>/<%= name %>.entity.ts
---
import { Field, ID, ObjectType, registerEnumType } from "type-graphql";
import { v4 as uuidv4 } from 'uuid';

@ObjectType()
export class <%= name %> {

    @Directive('@unique')
    @Field(type=>ID)
    id!: string;

    @Field()
    field!: string;

    @Field()
    createdAt!: number;

    @Field()
    createdBy!: number;

    @Field()
    modifiedAt!: number;

    @Field()
    modifiedBy!: number;

     @Field({nullable: true})
    deletedAt!: number;

    @Field({nullable: true})
    deletedBy!: number;

    constructor(input: {

        field: string;
        createdAt?: number;
        createdBy?: number;
        modifiedAt?: number;
        modifiedBy? : number;

    }) {
        this.id = uuidv4();
        this.field = input.field;
        this.createdAt = input.createdAt || Date.now();
        this.createdBy = input.createdBy || 1;
        this.modifiedAt = input.modifiedAt || Date.now();
        this.modifiedBy = input.modifiedBy || 1;
    }

}
