import React  from 'react';

function DriverRow({ driver, style }) {
    console.log(`4 driver object::`, driver.firstName);
    return (
        <tr>
            <td style={style}>{new Date(parseInt(driver.appointmentDate)).toDateString()}</td>
            <td style={style}>{new Date(driver.appointmentTime).toLocaleTimeString('en-US')}</td>
            <td style={style}>{driver.firstName}</td>
            <td style={style}>{driver.lastName}</td>
            <td style={style}>{driver.model}</td>
            <td style={style}>{driver.plateNumber}</td>
            <td style={style}>{driver.isPassed}</td>
            <td style={style}>{driver.comment}</td>
        </tr>
    )
}

export default DriverRow;