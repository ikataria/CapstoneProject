import { BrowserRouter, Link } from "react-router-dom";
import PageRoutes from "./PageRoutes"; 

function Menu() {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <Link style={{"fontSize":"20px", "font-weight": "700"}} to="/">Home</Link>
                        {' | '}
                    <Link style={{"fontSize":"20px", "font-weight": "700"}} to="/registration">Sign-Up</Link>
                </nav>
                <PageRoutes/>                
            </div>
        </BrowserRouter>
    )
}

export default Menu;