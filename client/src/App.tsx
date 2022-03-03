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
import { useLoading } from "context/loadingContext";
import Modal from "context-components/Modal";

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
  const [modal, setModal ] = useState(false);
  const auth = useAuth();
  const rootRoutes = useRoutes(Routes);
  const nav = useNav();
  const theme = useTheme();
  const { setLoading, setType } = useLoading();

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

  const setLoadingFunc = () =>{
    
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
      setTimeout(()=>{
        setType("BarLoader")
        setLoading(true);
        setTimeout(()=>{
          setLoading(false);
        }, 2000)
      },1000)
    }, 3000)

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
        <button onClick={()=>setModal(true)}>Toggle Modale</button>
        <button onClick={setLoadingFunc}>Toggle Modale</button>

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
        <Modal show={modal}>
          <button onClick={()=>setModal(false)}>Close Modal</button>
        </Modal>
        <Toast/>
        <Footer/>
    </AppContainer>
  )
}

export default App
