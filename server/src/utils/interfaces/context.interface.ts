import { Request } from "express";
import { OGM } from "@neo4j/graphql-ogm";
import { ModelMap, User } from "resources/ogm-types";

export interface Context {
  req: Request;
  authorization?: string;
  user: User | any;
  ogm: OGM<ModelMap>;
}