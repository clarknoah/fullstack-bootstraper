import React, { createContext, useContext } from "react";


export type TestType = {
  field: string;
  action: (newValue: string) => undefined;
};


export const TestContext = createContext<TestType>(null!);


export const useTest = () =>{
  return useContext(TestContext)
}

export type TestProviderProps = {
  children: React.ReactNode;
}

export const TestProvider: React.FC<TestProviderProps> = ({
  children
})=>{
  let [property, setTest] = React.useState<any>({
    field: "hello"
  });

  let action = (newValue: string) => {
      setTest({
        field: newValue
      });
      return undefined;
  };


  let value = {field:property.field, action};

  return <TestContext.Provider value={value}>{children}</TestContext.Provider>;
}
