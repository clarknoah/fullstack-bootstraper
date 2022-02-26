import React from "react";
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "context/authContext";
import { TestProvider } from "context/TestContext";
import { NavProvider } from "context/navContext";
import App from "App";
interface DemoModuleProps {
  children?: React.ReactNode;
}


const DemoModule: React.FC<DemoModuleProps> = (
  children?: React.ReactNode
) => {
  return (
    <React.StrictMode>
      <NavProvider>
        <TestProvider>
          <AuthProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
          </AuthProvider>
        </TestProvider>
      </NavProvider>
  </React.StrictMode>
  )
};

export default DemoModule;
