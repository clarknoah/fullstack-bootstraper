import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "context/authContext";
import { TestProvider } from "context/TestContext";
import { NavProvider } from "context/navContext";

ReactDOM.render(
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
  </React.StrictMode>,
  document.getElementById('root')
)
