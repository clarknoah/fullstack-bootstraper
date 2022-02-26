import React from 'react'
import ReactDOM from 'react-dom'
import DemoModule from "root-modules/DemoModule";
import TestModule from "root-modules/TestModule";
import "./index.css";
const setModule = (route:string = "DemoModule") => {
  if(route = "DemoModule"){
    return <DemoModule/>
  }
  return <TestModule/>
}

ReactDOM.render(
  setModule(),
  document.getElementById('root')
)
