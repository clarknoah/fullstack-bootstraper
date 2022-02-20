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

export default routes;