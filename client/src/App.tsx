import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Test from "./components/Test";
import { Link, useRoutes} from "react-router-dom";
import Routes, { routeList } from "routes";
import { useAuth } from "context/authContext";
import styled from "styled-components";
import React from "react";
import Toast, { toast } from "contextComponents/Toast";
import Header from "contextComponents/Header";
import Footer from "contextComponents/Footer";
import { useNav } from "context/navContext";

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

toast.raw.configure({
  autoClose: 1000,
  draggable: true,
});


const App: React.FC<{}> = () =>{
  const auth = useAuth();
  let bob = "Hello";
  const rootRoutes = useRoutes(Routes);
  const nav = useNav();
  console.log("Page Reloaded");

  const successToast = () =>{
    toast.raw.success("Success Notification !", {
      position: toast.raw.POSITION.TOP_CENTER,
      autoClose: 1500
    });
  }
  const errorToast = () =>{
    toast.raw.error("Success Notification !", {
      position: toast.raw.POSITION.TOP_CENTER,
      autoClose: 3500
    });
  }

  return (
    <AppContainer>
        <Header/>
        <div>App Component: {auth.user}</div>
        <button onClick={successToast}>Trigger Success</button>
        <button onClick={()=>toast.error("What the hell")}>Trigger Error</button>
        <button onClick={()=>nav.toggleHeaderVisibility()}>Toggle Header</button>
        <button onClick={()=>nav.toggleFooterVisibility()}>Toggle Footer</button>

        <ul>
        {routeList.map(value=>(
          <li>
          <Link to={value}>{value}</Link>
        </li>)
        )}
        </ul>
        {rootRoutes}
        {auth.user && <p>Hi</p>}
        <Toast/>
        <Footer/>
    </AppContainer>
  )
}

export default App
