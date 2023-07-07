import { BrowserRouter, Link } from "react-router-dom";
import PageRoutes from "./PageRoutes";

function Menu() {
    return (
        <BrowserRouter>
            <div className="webAccessBar">
                <a href="https://www.ontario.ca/page/accessibility" target="_blank">Website Accessiblity</a>
            </div>

            <nav className="navbar">
                <Link className="logo" to="/">DRIVE<span>TEST</span></Link>
                <Link className="navBarList" to="/driver/addDetails">Add Details</Link>
                <Link className="navBarList" to="/driver/details/:userName">Driver</Link>
                <Link className="navBarList" to="/registration">Login</Link>
            </nav>

            <PageRoutes />

            <footer id="footer">
            <h2 className="homePageNewBanner"></h2>

                <div className="upperFooter">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 fContact">
                                <h3 className="logo">DRIVE<span>TEST</span></h3>
                                <p>1405 Ottawa St N Unit 11</p>
                                <p>Kitchener, ON N2A 3Z1</p>
                                <p>Canada</p>
                                <br></br>
                                <p><b>Phone:</b> +1 519-721-2744</p>
                                <p><b>Email:</b> 17kataria@gmail.com</p>
                            </div>

                            <div className="col-lg-4 col-md-6 footer-links">
                                <h4>Navigation Links</h4>
                                <ul>
                                    <li><i class="bx bxl-react bx-tada"></i> <Link to="/">Home</Link></li>
                                    <li><i class="bx bxl-mongodb bx-tada"></i> <Link to="/driver/addDetails">Add Details</Link></li>
                                    <li><i class="bx bxl-graphql bx-tada"></i> <Link to="/driver/details">Driver</Link></li>
                                    <li><i class="bx bxl-nodejs bx-tada"></i> <Link to="/registration">Login</Link></li>
                                </ul>
                            </div>

                            <div className="col-lg-4 col-md-6 footer-links">
                                <h4>Social Networks</h4>
                                <p>Reach us on social media</p>
                                <div className="social-links mt-3">
                                    <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                                    <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                                    <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                                    <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container footer-bottom clearfix">
                    <div className="copyright">
                        &copy; Copyright <b><span>Team of 5</span></b>. All Rights Reserved
                    </div>
                </div>
            </footer>

        </BrowserRouter>
    )
}

export default Menu;