import { Link } from "react-router-dom";


function Home() {
    return (

        <div>
            <h2 className="homePageNewBanner">DRIVETEST IS OPEN FOR BUSINESS</h2>

            <div className="heroImg">
                <div className="heroImgContent heroTxt">
                    <h3>DriveTest: Licensed by the Government of Ontario</h3>

                    <p>DriveTest Centres offer driver licensing and examination services, such as knowledge tests and road tests, on behalf of the Ministry of Transportation (MTO).</p>

                    <p>Join the line for inside services at the Brampton and Metro East DriveTest Centres from anywhere using our new remote check in system. View the Brampton entry or the Metro East entry on the Find a DriveTest Centre page or Alphabetical Centre List page to check in electronically.</p>

                    <p>To manage website traffic and provide a fair, first-in-first-out road test appointment booking experience, we use virtual queue technology.</p>


                    <Link className="btn btn-success btn-lg" to="/registration">BOOK A ROAD TEST</Link>
                </div>
            </div>

        </div>
    )
}

export default Home;