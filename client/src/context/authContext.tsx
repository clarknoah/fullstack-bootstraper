import React, { createContext, useContext } from "react";


export type AuthType = {
  authorized: boolean;
  user:string;
  signin: (user: string) => undefined;
  signout: () => undefined;
};


export const AuthContext = createContext<AuthType>(null!);


export const useAuth = () =>{
  return useContext(AuthContext)
}


export type AuthProviderProps = {
  children: React.ReactNode;
}



export const AuthProvider: React.FC<AuthProviderProps> = ({
  children
})=>{
  let [user, setUser] = React.useState<any>({
    authorized: false,
    user:''
  });

  let signin = (newUser: string) => {
      setUser({
        authorized:true,
        user:newUser
      });
      return undefined;
  };

  let signout = () => {
      setUser({
        authorized:false,
        user:null
      });
      return undefined;
  };

  let value = { authorized:user.authorized, user:user.user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
