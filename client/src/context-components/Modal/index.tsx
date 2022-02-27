import React from "react";
import styled from "styled-components";
import { useModal } from "context/modalContext";

const ModalContainer = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0,0,0,0.5);
  z-index: 2;
`;

const ModalBox = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: 50vw;
  opacity: 1;
  z-index: 3;
`


interface ModalProps {
  children: React.ReactNode;
}


const Modal: React.FC<ModalProps> = (props) => {
  const { children } = props;
  const modal = useModal();

  console.log(modal);

  if(modal.showModal){

    return (
    <div>
      <ModalContainer>
        <ModalBox>
          {modal.content ? modal.content : (
            <h1>This is a modal</h1>
          )}
          <button onClick={()=>modal.toggleModalVisibility(false)}>Close Modal</button>
        </ModalBox>
      </ModalContainer>
      {children}
    </div>
    );

  }else{

    return <>{children}</>
    
  } 
};

export default Modal;
