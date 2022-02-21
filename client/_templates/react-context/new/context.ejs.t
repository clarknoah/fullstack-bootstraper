---
to: src/context/<%= name %>Context.tsx
---
import { createContext, useContext } from "react";


export type <%= name %>Type = {
  field: boolean;
};


export const <%= name %>Context = createContext<<%= name %>Type>({
  field:false
});


export const use<%= name %> = () =>{
  return useContext(<%= name %>Context)
}
