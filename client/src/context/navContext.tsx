import React, { createContext, useContext } from "react";


export type NavType = {
  showHeader: boolean;
  showFooter: boolean;
  toggleHeaderVisibility: (value?: boolean) => undefined;
  toggleFooterVisibility: (value?: boolean) => undefined;
};


export const NavContext = createContext<NavType>(null!);


export const useNav = () =>{
  return useContext(NavContext)
}

export type NavProviderProps = {
  children: React.ReactNode;
}

export const NavProvider: React.FC<NavProviderProps> = ({
  children
})=>{
  let [showFooter, setFooter] = React.useState<boolean>(Boolean(import.meta.env.VITE_SHOW_FOOTER));
  let [showHeader, setHeader] = React.useState<boolean>(Boolean(import.meta.env.VITE_SHOW_HEADER));
  console.log(showFooter,showHeader);
  let toggleFooterVisibility = (value: boolean = !showFooter) => {
      setFooter(value);
      return undefined;
  };
  let toggleHeaderVisibility = (value: boolean = !showHeader) => {
    console.log("hi")
      setHeader(value);
      return undefined;
  };


  let value = {showHeader, showFooter, toggleHeaderVisibility, toggleFooterVisibility};

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
}
