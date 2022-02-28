import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Test from "./components/Test";
import { Link, useRoutes} from "react-router-dom";
import Routes, { routeList } from "routes";
import { useAuth } from "context/authContext";
import styled from "styled-components";
import React from "react";
import Toast, { toast } from "context-components/Toast";
import Header from "context-components/Header";
import Footer from "context-components/Footer";
import { useNav } from "context/navContext";
import { useTheme } from "context/themeContext";
import { useModal } from "context/modalContext";

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const ModalContent = styled.div`
  height: 50%;
  width: 50%;
  background: white;
`

toast.raw.configure({
  autoClose: 1000,
  draggable: true,
});


const DemoModal: React.FC<{
  onClose: Function
  callback?: Function
}> = ( props ) =>{
  const [ text, setText ] = useState("");
  
return <ModalContent>
  <input value={text} onChange={e=>setText(e.target.value)}/>
  <button onClick={()=>props.onClose(text)}>Submit</button>
  <button onClick={()=>{
    if(props.callback){
      props.callback(text)
    }
    }}>callthingsback</button>

</ModalContent>
}


const App: React.FC<{}> = () =>{
  const [data, setData ] = useState("Not Set");
  const auth = useAuth();
  const rootRoutes = useRoutes(Routes);
  const nav = useNav();
  const theme = useTheme();
  const modal = useModal();

  const setText = (text: string) =>{
    console.log("getting called", text);
    setData(text);
    modal.close();
  }

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

  const showModal = () =>{
    modal.setContent(<DemoModal onClose={setText} callback={(d:any)=>{
      console.log(d);
      setData(d);
      console.log("data:", data);
    }}/>);
    modal.open(()=>console.log("Modal has opened"));

  }

  return (
    <AppContainer>
        <Header/>
        <div>App Component: {auth.user}</div>
        <button onClick={successToast}>Trigger Success</button>
        <button onClick={()=>toast.error("What the hell")}>Trigger Error</button>
        <button onClick={()=>nav.toggleHeaderVisibility()}>Toggle Header</button>
        <button onClick={()=>nav.toggleFooterVisibility()}>Toggle Footer</button>
        <button onClick={()=>theme.toggleTheme()}>Toggle Theme</button>
        <button onClick={showModal}>Toggle Modal</button>
        <h4>{data}</h4>
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
