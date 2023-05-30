import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Block/Layout";
import Homescreen from "../Pages/Homescreen";




export const mainRouter = createBrowserRouter([
    
    {
            path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element:<Homescreen/>,

            }
        ]
      }
    
])