import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "context/authContext";
import { TestProvider } from "context/TestContext";
ReactDOM.render(
  <React.StrictMode>
    <TestProvider>
      <AuthProvider>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
      </AuthProvider>
    </TestProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
