import { HeaderComponent } from "./components/header.component";
import { Outlet } from "react-router-dom";
export function MainLayOut(){
    return(
        <>
            <HeaderComponent></HeaderComponent>
            <Outlet></Outlet>
        </>
    )
}