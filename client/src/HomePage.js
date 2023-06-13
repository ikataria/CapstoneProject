import { Link } from "react-router-dom";


function Home() {
    console.log(`5 home`);
    return (
        <div >
            <h1>Welcome to driving license kiosk</h1>
            <p>You can grab your G license in 3 stages in Canada.</p>
            <p>G1 is the first stage.</p>
            <p>G2 is the second stage.</p>
            <p>G is the final stage.</p>
            <button>
                <Link to="/registration">Let's Start</Link>
            </button>
        </div>
    )
}

export default Home;