import { Request } from "express";
import { User } from "resources/User/User.entity";
import { OGM } from "@neo4j/graphql-ogm";
import { ModelMap } from "resources/ogm-types";

export interface Context {
  req: Request;
  authorization?: string;
  user: User | any;
  ogm: OGM<ModelMap>;
}