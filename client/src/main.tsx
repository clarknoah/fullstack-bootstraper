import React from 'react'
import ReactDOM from 'react-dom'
import DemoModule from "root-modules/DemoModule";

const setModule = () => {
  return <DemoModule/>
}

ReactDOM.render(
  setModule(),
  document.getElementById('root')
)
