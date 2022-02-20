import type { RouteObject } from "react-router-dom";
import Test from "components/Test";

const routes:RouteObject[] = [
    {
        path: "/",
        element: <Test input={"Base Path: /"} />,
        children:[
            // { index: true, element: <Test input={"Nested Home"} /> },
            {path: "/home", 
            element:  <Test input={" Home"} />,
            children:[
                {path: "/home/friend", element:  <Test input={"Friend"} />},
                {path: "/home/mike", element:  <Test input={"mike"} />}
            ]
        },
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
    let list:React.ReactNode[] = [];
    //Iterate through routes and create list link 
    //If route has children, call routeList on children
    routes.forEach(value=>{
      if(value.path){
        list.push(<li><a href={value.path}>{value.path}</a></li>)
      }
      if(value.children && value.children.length > 0){
        list.push(...getRouteList(value.children))
      }
    })
    return list;
  } 

 export const routeList = getRouteList(routes);


export default routes;