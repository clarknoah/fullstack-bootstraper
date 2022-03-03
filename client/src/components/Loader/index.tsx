import React from "react";
import styled from "styled-components";
import { css } from "@emotion/react";
import {ClipLoader, BarLoader} from "react-spinners";


const wideBar = css`
  width: 100vw;
  border-color: red;
`;

interface LoaderProps {
  type?: string;
  color?: string;
  size?: number;
  height?: number;
  width?: number;
}




const Loader: React.FC< LoaderProps > = ({
  type = "ClipLoader", 
  color = "green", 
  size = 150,
  height = 150,
  width = 150
}) => {

  const setLoaderType = (type: string = "ClipLoader") =>{
    switch(type){
      case "ClipLoader":
        return <ClipLoader color={color} size={size}/>
      case "BarLoader":
        return <BarLoader height={10} color={color} css={wideBar}/>
      default:
        <ClipLoader color={color} size={size}/>
    }
  }
  
  return (
    <>
      {setLoaderType(type)}
    </>
  )
};

export default Loader;
