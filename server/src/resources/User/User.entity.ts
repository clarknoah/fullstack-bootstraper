import { Field, ID, ObjectType, Directive, Float } from "type-graphql";
import {Post} from "resources/Post/Post.entity";
import { Role } from "resources/Role/Role.entity";
import { v4 as uuidv4 } from 'uuid';

export enum AccountStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    BANNED = "BANNED",
    DELETED = "DELETED",
    PENDING = "PENDING"
}


@ObjectType()
@Directive(`@node(label: "User")`)
export class User {

    @Directive('@id')
    @Field(type=>ID)
    id!: string;

    @Directive('@private')
    @Field(type=>String)
    password!: string;
    
    @Directive('@private')
    @Field(type=>String, {nullable:true})
    pendingEmail?: string;

    @Directive('@private')
    @Field(type=>String)
    verificationToken!: string;

    @Directive('@private')
    @Field(type=>Float, {nullable:true})
    loginRetries?: number;

    @Directive('@private')
    @Field(type=>String, {nullable:true})
    resetToken?: string;

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

    @Field(type=>ID)
    accountStatus?: string = AccountStatus.PENDING;

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

    @Directive(`@relationship(type: "HAS_ROLE", direction: OUT)`)
    @Field(type=> Role, {nullable: true})
    roles?: Role[]



}
