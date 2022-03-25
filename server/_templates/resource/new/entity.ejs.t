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

    @Directive("@timestamp(operations: [CREATE])")
    @Field(type => Date)
    createdAt!: string;

    @Field(type=>ID)
    createdBy!: string;

    @Field(type=>ID)
    modifiedBy!: string;

    @Directive("@timestamp(operations: [CREATE, UPDATE])")
    @Field(type => Date)
    lastModifiedAt!: string;

     @Field(type => Date {nullable: true})
    deletedAt?: string;

    @Field(type => ID {nullable: true})
    deletedBy?: string;

}
