import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Test from "./components/Test";
import { Outlet, Link, useRoutes, useParams, RouteObject } from "react-router-dom";
import Routes, { routeList } from "routes";




function App() {
  const [count, setCount] = useState(0);
  let bob = "Hello";
  console.log(import.meta.env);
  let vars = Object.entries(import.meta.env).map(val=><p>{val[0]}: {val[1]}</p>)
  console.log(Routes);
  const rootRoutes = useRoutes(Routes);
  return (
    <div className="App">
      <ul>

      {routeList}
      </ul>
      {rootRoutes}
    </div>
  )
}

export default App
