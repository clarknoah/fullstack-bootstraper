---
to: src/root-modules/<%= name %>/index.tsx
---
import React from "react";
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "context/authContext";
import { TestProvider } from "context/TestContext";
import { NavProvider } from "context/navContext";

interface <%= name %>Props {
  children?: React.ReactNode;
}


const <%= name %>: React.FC<<%= name %>Props> = (
  children?: React.ReactNode
) => {
  return (
    <React.StrictMode>
      <NavProvider>
        <TestProvider>
          <AuthProvider>
            <BrowserRouter>
                {children}
            </BrowserRouter>
          </AuthProvider>
        </TestProvider>
      </NavProvider>
  </React.StrictMode>
  )
};

export default <%= name %>;
