import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AuthData } from "../../../auth/AuthWrapper";


// user detail form
const UserDetailsForm = ({ UserInfo }) => {

    // console.log(`userInfo>>>>>>>>>>>>>>9`, UserInfo);

    return (
        <div>
            {/* <form name="userForm" onSubmit={handleSubmit}> */}
            <form name="userForm">
                <h2 className="homePageNewBanner">DRIVER DETAILS</h2>
                <br />
                <br />
                <br />

                <div className="form-group row">
                    <label htmlFor="userName" className="col-sm-4 col-form-label col-form-label-lg">Username</label>
                    <div className="col-sm-6">
                        <input name="userName" type="text" placeholder="JohnDoe" className="form-control form-control-lg" minlength="3" maxlength="25" disabled value={UserInfo?.userName}></input>
                    </div>
                </div>
                <br />

                <div className="form-group row">
                    <label htmlFor="firstName" className="col-sm-4 col-form-label col-form-label-lg">Firstname</label>
                    <div className="col-sm-6">
                        <input name="firstName" id="firstName" type="text" placeholder="John" className="form-control form-control-lg" minlength="3" maxlength="25" disabled value={UserInfo?.firstName}></input>
                    </div>
                </div>
                <br />

                <div className="form-group row">
                    <label htmlFor="lastName" className="col-sm-4 col-form-label col-form-label-lg">Lastname</label>
                    <div className="col-sm-6">
                        <input name="lastName" type="text" placeholder="Doe" className="form-control form-control-lg" minlength="3" maxlength="25" disabled value={UserInfo?.lastName}></input>
                    </div>
                </div>
                <br />

                <div className="form-group row">
                    <label htmlFor="age" className="col-sm-4 col-form-label col-form-label-lg">Age</label>
                    <div className="col-sm-6">
                        <input name="age" type="number" placeholder="25" className="form-control form-control-lg" disabled value={UserInfo?.age}></input>
                    </div>
                </div>
                <br />

                <div className="form-group row">
                    <label htmlFor="licenseNumber" className="col-sm-4 col-form-label col-form-label-lg">License Number</label>
                    <div className="col-sm-6">
                        <input name="licenseNumber" type="text" placeholder="DL123456789" className="form-control form-control-lg" minlength="15" maxlength="15" disabled value={UserInfo?.licenseNumber}></input>
                    </div>
                </div>
                <br />



                <div className="form-group row">
                    <label htmlFor="make" className="col-sm-4 col-form-label col-form-label-lg">Vehicle make</label>
                    <div className="col-sm-6">
                        <input name="make" type="text" placeholder="Toyota" className="form-control form-control-lg" minlength="3" maxlength="25" disabled value={UserInfo?.make}></input>
                    </div>
                </div>
                <br />

                <div className="form-group row">
                    <label htmlFor="model" className="col-sm-4 col-form-label col-form-label-lg">Vehicle Model</label>
                    <div className="col-sm-6">
                        <input name="model" type="text" placeholder="Highlander" className="form-control form-control-lg" minlength="3" maxlength="25" disabled value={UserInfo?.model}></input>
                    </div>
                </div>
                <br />

                <div className="form-group row">
                    <label htmlFor="year" className="col-sm-4 col-form-label col-form-label-lg">Manufacture Year</label>
                    <div className="col-sm-6">
                        <input name="year" type="number" placeholder="2023" className="form-control form-control-lg" disabled value={UserInfo?.year}></input>
                    </div>
                </div>
                <br />

                <div className="form-group row">
                    <label htmlFor="plateNumber" className="col-sm-4 col-form-label col-form-label-lg">Plate Number</label>
                    <div className="col-sm-6">
                        <input name="plateNumber" type="text" placeholder="JD 1996" className="form-control form-control-lg" minlength="3" maxlength="25" disabled value={UserInfo?.plateNumber}></input>
                    </div>
                </div>
                <br />



                {/* <div className="form-group">
                    <input type="submit" value="Submit" className="btn btn-success btn-lg" />
                </div> */}
            </form>

            <br />
            <br />
        </div>
    )
}

// Hit API
const FetchUserDetails = () => {

    const { user } = AuthData();
    const [ userDetails, setUserDetails] = useState({});

    const userName = user.name;
    console.log(`userName>>132`, userName);

    const fetchData = async (userName) => {
        let query = `
            query {
                getUserByUserName(userName:"${userName}"){
                    userName,
                    password,
                    userType,
                    firstName,
                    lastName,
                    age,
                    licenseNumber,
                    make,
                    model,
                    year,
                    plateNumber,
                }
            }
        `;

        fetch('http://localhost:7700/graphql', {
            method: 'Post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query })
        }).then(async (response) => {
            let userList = await response.json();
            console.log('userDetail::::>>163:', JSON.stringify(userList.data));
            setUserDetails(userList.data.getUserByUserName)
        })
    }

    useEffect(function () {
        fetchData(userName)
    }, []);

    return (
        <div>
            <UserDetailsForm UserInfo={userDetails} />
        </div>
    )
}

export default FetchUserDetails;