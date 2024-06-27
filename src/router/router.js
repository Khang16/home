import { createBrowserRouter } from "react-router-dom";
import { MainLayOut } from "../layout";
import { contentRouter } from "../modules/router";

export default createBrowserRouter([
    {
        path:'/',
        element: <MainLayOut></MainLayOut>,
        
        children:[
            contentRouter
        ]
    },
    
])