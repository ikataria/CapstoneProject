import { BrowserRouter, Link } from "react-router-dom";

import PageRoutes from "./PageRoutes";
import { RenderHeader } from "../structure/Header";
import { RenderFooter } from "../structure/Footer";

function Menu() {
    return (
       <>
       
            <RenderHeader/>

            {/* <nav className="navbar">
                <Link className="logo" to="/">DRIVE<span>TEST</span></Link>
                <Link className="navBarList" to="/driver/addDetails">Add Details</Link>
                <Link className="navBarList" to="/driver/details/:userName">Driver</Link>
                <Link className="navBarList" to="/registration">Login</Link>
            </nav> */}

            <PageRoutes />

            <RenderFooter/>
            </>
    )
}

export default Menu;