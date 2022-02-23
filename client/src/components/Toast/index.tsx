import React from "react";
import styled from "styled-components";
import { ToastContainer as ToastifyContainer, toast as toastify } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const ToastContainer = styled.div`
  position: absolute;
`;

interface ToastProps {
  input?: string;
}


const Toast: React.FC<{}> = () => {
  
  return (
    <ToastContainer>
      <ToastifyContainer/>
    </ToastContainer>

  )
};

export const error = (message:string = "") => {
  toastify.error(message || "An error has occurred", {
    position: toastify.POSITION.TOP_CENTER,
      autoClose: 1500
  })
}

export const toast = {
  raw: toastify,
  error
}

export default Toast;
