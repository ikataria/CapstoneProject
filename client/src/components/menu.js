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
                <Link className="navBarList" to="/driver/details">Driver</Link>
                <Link className="navBarList" to="/registration">Login</Link>
            </nav>

            <PageRoutes />

            <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 footer-contact">
                            <h3>Drive Test</h3>
                            <p>123 Wilson Ave</p>
                            <p>Kitchener,ON N2C 3B6</p>
                            <p>Canada</p>
                            <p><strong>Phone:</strong> +1 5589 55488 55</p>
                            <p><strong>Email:</strong> mohit@gmail.com</p>
                        </div>

                        <div className="col-lg-4 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><Link className="bx bx-chevron-right" to="/">Home</Link></li>
                                <li><Link className="bx bx-chevron-right" to="/driver/addDetails">Add Details</Link></li>
                                <li><Link className="bx bx-chevron-right" to="/driver/details">Driver</Link></li>
                                <li><Link className="bx bx-chevron-right" to="/registration">Login</Link></li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-6 footer-links">
                            <h4>Our Social Networks</h4>
                            <p>Follow us on these social media</p>
                            <div className="social-links mt-3">
                                <Link className="twitter"><i className="bx bxl-twitter"></i></Link>
                                <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                                <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                                <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                                <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                                <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container footer-bottom clearfix">
                <div className="copyright">
                    &copy; Copyright <strong><span>Mohit Kataria</span></strong>. All Rights Reserved
                </div>
            </div>
            </footer>

        </BrowserRouter>
    )
}

export default Menu;