import React from 'react';
import { useEffect, useState } from 'react';

import DriverRow from './DriverRow';
import DriverTable from './DriverTable';

function DriversDirectory() {

    const [usersList, setUsersList] = useState([]);

    console.log(`line 11`);
    async function driversList() {
        console.log(`line 13`);

        // return new Promise((resolve, reject) => {

            const query = `
            query {
                userDirectory{
                    userType
                    appointmentDate
                    appointmentTime
                    firstName
                    lastName
                    model
                    plateNumber
                    comment
                    isPassed
                }
            }
        `;
            fetch('http://localhost:7700/graphql', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query })
            }).then(async (response) => {
                let driversListObj = await response.json();
                console.log(__filename, `27:driversListObj::>>`, driversListObj.data.userDirectory);
                // alert(driversListObj.data.deleteRow)
                // window.location.assign("/")
                setUsersList(driversListObj.data.userDirectory)
            })
        // })
    }

    console.log(`line 43`);

    useEffect(function () {
        console.log(`line 46`);
        driversList()
    }, []);

    console.log(`line 49`);

    return (
        <div>
            <DriverTable allDrivers={usersList} />
        </div>
    )
}

export default DriversDirectory;