import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Test from "./components/Test";
import { Outlet, Link, useRoutes, useParams, RouteObject } from "react-router-dom";
import Routes, { routeList } from "routes";
import { AuthContext, useAuth } from "context/authContext";
import styled from "styled-components";
import React from "react";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;


function App() {

  let bob = "Hello";
  const rootRoutes = useRoutes(Routes);
  console.log("Page Reloaded");

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


  return (
    <AppContainer>
      <AuthContext.Provider value={value}>
        <div>App Component</div>
        <ul>
        {routeList}
        </ul>
        {rootRoutes}
      </AuthContext.Provider>
    </AppContainer>
  )
}

export default App
