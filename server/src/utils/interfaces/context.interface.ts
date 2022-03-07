import { Request } from "express";
import { User } from "resources/User/User.entity";
import { OGM } from "@neo4j/graphql-ogm";

export interface Context {
  req: Request;
  authorization?: string;
  user: User | any;
  ogm: OGM;
}