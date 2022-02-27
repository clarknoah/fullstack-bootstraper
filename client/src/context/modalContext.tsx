import React, { createContext, useContext } from "react";


export type ModalType = {
  showModal: boolean;
  toggleModalVisibility: (value?: boolean) => undefined;
  content: React.ReactNode;
  setContent: (content: React.ReactNode) => void;
};


export const ModalContext = createContext<ModalType>(null!);


export const useModal = () =>{
  return useContext(ModalContext)
}

export type ModalProviderProps = {
  children: React.ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({
  children
})=>{
  let [showModal, setModalVisibility] = React.useState<boolean>(false);
  let [content, setContent] = React.useState<React.ReactNode>(null);

  let toggleModalVisibility = (value: boolean = !showModal) => {
    setModalVisibility(value);
    return undefined;
  };


  let value = {showModal, toggleModalVisibility, content, setContent};

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
}
