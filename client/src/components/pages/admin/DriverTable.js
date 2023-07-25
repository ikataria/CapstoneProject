import DriverRow from "./DriverRow";

const DriverTable = ({ allDrivers }) => {
    const style = {
        "border": "1px solid black",
        "font-size": "20px",
        "margin": "auto"
    }

    // console.log(`allDrivers`, allDrivers);
    const allDriversRows = allDrivers.map(driver => (
        <DriverRow driver={driver} style={style} />
    ))

    return (
        <div>
            <h2 className="homePageNewBanner">DRIVER DETAILS</h2>
            <br />
            <br />
            <br />
            <table style={style}>
                <thead>
                    <tr>
                        <th style={style}>Date</th>
                        <th style={style}>Time</th>
                        <th style={style}>First Name</th>
                        <th style={style}>Last Name</th>
                        <th style={style}>Car Model</th>
                        <th style={style}>Plate Number</th>
                        <th style={style}>Result</th>
                        <th style={style}>Comment</th>
                    </tr>
                </thead>

                <tbody>
                    {allDriversRows}
                </tbody>
            </table>
        </div>
    )
}


export default DriverTable;