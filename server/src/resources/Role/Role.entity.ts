import { Field, ID, ObjectType, registerEnumType, Directive } from "type-graphql";
import { v4 as uuidv4 } from 'uuid';
import { User } from "resources/User/User.entity";
import "reflect-metadata";
export enum Roles {
    ADMIN = "ADMIN",
    USER = "USER"
}


registerEnumType(Roles, {
    name: "Roles",
    description: "Roles"
});


@ObjectType()
export class Role {

    @Directive('@id')
    @Field(type=>ID)
    id!: string;

    @Directive('@unique')
    @Field(type => String)
    name!: string;

    @Field(type => String, {nullable: true})
    description?: string;

    @Directive(`@relationship(type: "HAS_ROLE", direction: IN)`)
    @Field(type=> Role, {nullable: true})
    users?: User[];

    @Directive("@timestamp(operations: [CREATE])")
    @Field(type => Date)
    createdAt!: string;

    @Field(type=>ID, { nullable: true })
    createdBy?: string;

    @Field(type=>ID, {nullable: true})
    modifiedBy?: string;

    @Directive("@timestamp(operations: [CREATE, UPDATE])")
    @Field(type => Date)
    lastModifiedAt!: string;

     @Field(type => Date, {nullable: true})
    deletedAt?: string;

    @Field(type => ID, {nullable: true})
    deletedBy?: string;

}
