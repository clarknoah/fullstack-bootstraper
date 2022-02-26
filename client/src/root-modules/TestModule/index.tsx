import React from "react";
import './index.css'

interface TestModuleProps {
  children?: React.ReactNode;
}


const TestModule: React.FC<TestModuleProps> = (
  children?: React.ReactNode
) => {
  return (
    <React.StrictMode>
      <h1>This is a simply a test of the Root Module Generator</h1>
    </React.StrictMode>
  )
};

export default TestModule;
