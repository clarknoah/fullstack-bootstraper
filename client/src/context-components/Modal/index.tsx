import React from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  display: flex;
  position: absolute;
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
  z-index: 3;
  background-color: white;
`


interface ModalProps {
  show: boolean;
  children?: React.ReactNode;
  onClose?: (value: any) => any;
  type?: string;
}




const Modal: React.FC<ModalProps> = (props) => {
  const { children, type, onClose, show} = props;

  const setModalType = () =>{
    if(children){
      return children;
    }else{
      return <div>Crap</div>
    }
  }

  console.log("Modal getting Rendered");

    if(show){
    return (
      <ModalContainer>
        <ModalBox>
          {setModalType()}
        </ModalBox>
      </ModalContainer>
    );
  }else{
    return null;
  }
};

export default Modal;
