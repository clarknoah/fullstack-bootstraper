import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Test from "./components/Test";
import { Link, useRoutes} from "react-router-dom";
import Routes, { routeList } from "routes";
import { useAuth } from "context/authContext";
import styled from "styled-components";
import React from "react";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;


const App: React.FC<{}> = () =>{
  const auth = useAuth();
  let bob = "Hello";
  const rootRoutes = useRoutes(Routes);
  console.log("Page Reloaded");

  return (
    <AppContainer>
        <div>App Component: {auth.user}</div>
        <ul>
        {routeList.map(value=>(
        <li>
          <Link to={value}>{value}</Link>
        </li>)
        )}
        </ul>
        {rootRoutes}
        {auth.user && <p>Hi</p>}
    </AppContainer>
  )
}

export default App
