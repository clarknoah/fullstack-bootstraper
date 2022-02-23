import type { RouteObject, Link } from "react-router-dom";
import Test from "components/Test";
import Login from "components/Login";
import Logout from "components/Logout";
import Home from "pages/Home";

const routes:RouteObject[] = [
    {
        path: "/",
        element: <Home/>,
        children:[
            // { index: true, element: <Test input={"Nested Home"} /> },
            {path: "/home", 
              element:  <Test input={" Home"} />,
              children:[
                  {path: "/home/friend", element:  <Test input={"Friend"} />},
                  {path: "/home/mike", element:  <Test input={"mike"} />}
              ]
            },
            {path: "/login", element: <Login/>},
            {path: "/logout", element: <Logout/>}
        ]
    },
    {
        path: "users",
        element: <Test input={"Base Path: /users"} />,
        children:[
            { path: "./hello", element: <Test input={"/home slash"} /> }
        ]
    },
    { path: "*", element: <Test input={"This is a deadend"} /> }
];


const getRouteList = (routes:RouteObject[])=>{
    let list:string[] = [];
    //Iterate through routes and create list link 
    //If route has children, call routeList on children
    routes.forEach(value=>{
      if(value.path){
        list.push(value.path)
      }
      if(value.children && value.children.length > 0){
        list.push(...getRouteList(value.children))
      }
    })
    return list;
  } 

 export const routeList:string[] = getRouteList(routes);


export default routes;