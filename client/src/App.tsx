import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Test from "./components/Test";

function App() {
  const [count, setCount] = useState(0);
  let bob = "Hello";
  console.log(import.meta.env);
  let vars = Object.entries(import.meta.env).map(val=><p>{val[0]}: {val[1]}</p>)
  return (
    <div className="App">
      <Test/>
    </div>
  )
}

export default App
