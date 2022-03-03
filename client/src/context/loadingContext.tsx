import React, { createContext, useContext } from "react";
import Loader from "components/Loader";
import styled from "styled-components";
import { Color } from "styling";


export type LoadingType = {
  show: boolean;
  color: string;
  height: number;
  width: number;
  type: string;
  setLoading: (value:boolean) => void;
  setColor: (value: string) => void;
  setType: (value: string) => void;
  setWidth: (value: number) => void;
  setHeight: (value: number) => void;
};

const GlobalLoaderContainer = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0,0,0,0.05);
  z-index: 2;
`;


export const LoadingContext = createContext<LoadingType>(null!);


export const useLoading = () =>{
  return useContext(LoadingContext)
}

export type LoadingProviderProps = {
  children: React.ReactNode;
}

export const LoadingProvider: React.FC<LoadingProviderProps> = ({
  children
})=>{
  let [show, setLoading] = React.useState<boolean>(false);
  let [height, setHeight] = React.useState<number>(150);
  let [color, setColor] = React.useState<string>("green");
  let [type, setType] = React.useState<string>("ClipLoader");
  let [width, setWidth] = React.useState<number>(150);




  let value = {show, height, color, width, setLoading, setHeight, setColor, setWidth, type, setType};

  if(show){
    return (
    <LoadingContext.Provider value={value}>
      <GlobalLoaderContainer>
        <Loader type={type} height={height} />
      </GlobalLoaderContainer>
        {children}
    </LoadingContext.Provider>
    )
  }

  return <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>;
}
