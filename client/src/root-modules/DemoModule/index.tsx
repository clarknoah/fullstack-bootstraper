import React from "react";
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "context/authContext";
import { TestProvider } from "context/TestContext";
import { NavProvider } from "context/navContext";
import GlobalStyles from "context-components/globalStyles";
import { ThemeProvider } from "context/themeContext";
import { ModalProvider} from "context/modalContext";
import Modal from "context-components/Modal";
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
                <ModalProvider>
                  <NavProvider>
                    <Modal>
                      <App/>
                    </Modal>
                  </NavProvider>
                </ModalProvider>
              </ThemeProvider>
            </BrowserRouter>
          </AuthProvider>
        </TestProvider>
  </React.StrictMode>
  )
};

export default DemoModule;
