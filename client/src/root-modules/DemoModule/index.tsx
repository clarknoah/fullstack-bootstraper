import React from "react";
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "context/authContext";
import { TestProvider } from "context/TestContext";
import { NavProvider } from "context/navContext";
import GlobalStyles from "context-components/globalStyles";
import { ThemeProvider } from "context/themeContext";
import { LoadingProvider } from "context/loadingContext";
import GlobalLoader from "context-components/GlobalLoader";

import App from "App";
interface DemoModuleProps {
  children?: React.ReactNode;
}


const DemoModule: React.FC<DemoModuleProps> = (
  children?: React.ReactNode
) => {
  return (
    <React.StrictMode>
        <TestProvider>
          <AuthProvider>
            <BrowserRouter>
              <ThemeProvider>
                <GlobalStyles/>
                  <LoadingProvider>
                    <NavProvider>
                        <App/>
                    </NavProvider>
                  </LoadingProvider>
              </ThemeProvider>
            </BrowserRouter>
          </AuthProvider>
        </TestProvider>
  </React.StrictMode>
  )
};

export default DemoModule;
