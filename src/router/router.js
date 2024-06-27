import { createBrowserRouter } from "react-router-dom";
import { MainLayOut } from "../layout";
import { contentRouter } from "../modules/router";
import { HomePage } from "../modules/users/home";

export default createBrowserRouter([
    {
        path:'/',
        element: <MainLayOut></MainLayOut>,
        
        children:[
            {
                path: '/home',
                element: <HomePage></HomePage>
            },
            contentRouter
        ]
    },
    
])