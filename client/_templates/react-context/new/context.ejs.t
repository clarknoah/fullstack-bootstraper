---
to: src/context/<%= name.toLowerCase() %>Context.tsx
---
import React, { createContext, useContext } from "react";


export type <%= name %>Type = {
  field: string;
  action: (newValue: string) => undefined;
};


export const <%= name %>Context = createContext<<%= name %>Type>(null!);


export const use<%= name %> = () =>{
  return useContext(<%= name %>Context)
}

export type <%= name %>ProviderProps = {
  children: React.ReactNode;
}

export const <%= name %>Provider: React.FC<<%= name %>ProviderProps> = ({
  children
})=>{
  let [property, set<%= name %>] = React.useState<any>({
    field: "hello"
  });

  let action = (newValue: string) => {
      set<%= name %>({
        field: newValue
      });
      return undefined;
  };


  let value = {field:property.field, action};

  return <<%= name %>Context.Provider value={value}>{children}</<%= name %>Context.Provider>;
}
