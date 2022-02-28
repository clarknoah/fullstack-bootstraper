import React, { createContext, useContext } from "react";


export type ModalType = {
  showModal: boolean;
  toggleModalVisibility: (value?: boolean) => void;
  open: (callback?: Function) => void;
  close: (callback?: Function) => void;
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
  };

  const open = (callback:Function | null = null) =>{
    if(callback!==null){
      callback();
    }
    setModalVisibility(true);
  }
  const close = (callback:Function | null = null) =>{
    if(callback!==null){
      callback();
    }
    setModalVisibility(false);
  }


  let value = {showModal, toggleModalVisibility, content, setContent, open, close};

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
}
