import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


// user detail form
const UserDetailsForm = ({ UserInfo }) => {

    console.log(`userInfo>>>>>>>>>>>>>>9`, UserInfo);

    const handleSubmit = (e) => {
        e.preventDefault();

        // const form = document.forms.userForm;


        // const userObj = {
        //     firstName: form.firstName.value.trim().toLowerCase(),
        //     lastName: form.lastName.value.trim().toLowerCase(),
        //     userName: form.userName.value.trim(),
        //     dob: form.dob.value.trim(),
        //     licenseNumber: form.licenseNumber.value.trim().toLowerCase(),
        //     make: form.make.value.trim().toLowerCase(),
        //     model: form.model.value.trim().toLowerCase(),
        //     plateNumber: form.plateNumber.value.trim().toLowerCase(),
        // }

        // console.log(`userObj::>`, userObj);

        // SaveUserInfo(userObj);

    }

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
                        <input name="userName" type="text" placeholder="JohnDoe" className="form-control form-control-lg" minlength="3" maxlength="25" disabled value={UserInfo?.firstName}></input>
                    </div>
                </div>
                <br />

                <div className="form-group row">
                    <label htmlFor="firstName" className="col-sm-4 col-form-label col-form-label-lg">Firstname</label>
                    <div className="col-sm-6">
                        <input name="firstName" id="firstName" type="text" placeholder="John" className="form-control form-control-lg" minlength="3" maxlength="25" disabled></input>
                    </div>
                </div>
                <br />

                <div className="form-group row">
                    <label htmlFor="lastName" className="col-sm-4 col-form-label col-form-label-lg">Lastname</label>
                    <div className="col-sm-6">
                        <input name="lastName" type="text" placeholder="Doe" className="form-control form-control-lg" minlength="3" maxlength="25" disabled></input>
                    </div>
                </div>
                <br />

                <div className="form-group row">
                    <label htmlFor="licenseNumber" className="col-sm-4 col-form-label col-form-label-lg">License Number</label>
                    <div className="col-sm-6">
                        <input name="licenseNumber" type="text" placeholder="DL123456789" className="form-control form-control-lg" minlength="15" maxlength="15" disabled></input>
                    </div>
                </div>
                <br />

                <div className="form-group row">
                    <label htmlFor="dob" className="col-sm-4 col-form-label col-form-label-lg">Birth Date</label>
                    <div className="col-sm-6">
                        <input name="dob" type="date" placeholder="July 4, 1996" className="form-control form-control-lg" disabled></input>
                    </div>
                </div>
                <br />

                <div className="form-group row">
                    <label htmlFor="make" className="col-sm-4 col-form-label col-form-label-lg">Vehicle make</label>
                    <div className="col-sm-6">
                        <input name="make" type="text" placeholder="Toyota" className="form-control form-control-lg" minlength="3" maxlength="25" disabled></input>
                    </div>
                </div>
                <br />

                <div className="form-group row">
                    <label htmlFor="model" className="col-sm-4 col-form-label col-form-label-lg">Vehicle Model</label>
                    <div className="col-sm-6">
                        <input name="model" type="text" placeholder="Highlander" className="form-control form-control-lg" minlength="3" maxlength="25" disabled></input>
                    </div>
                </div>
                <br />


                <div className="form-group row">
                    <label htmlFor="plateNumber" className="col-sm-4 col-form-label col-form-label-lg">Plate Number</label>
                    <div className="col-sm-6">
                        <input name="plateNumber" type="text" placeholder="JD 1996" className="form-control form-control-lg" minlength="3" maxlength="25" disabled></input>
                    </div>
                </div>
                <br />

                <div className="form-group row">
                    <label htmlFor="appointmentDate" className="col-sm-4 col-form-label col-form-label-lg">Appointment Date</label>
                    <div className="col-sm-6">
                        <input name="appointmentDate" type="date" placeholder="Aug 4, 2023" className="form-control form-control-lg" disabled></input>
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
    const { userName } = useParams();
    const [ userDetails, setUserDetails] = useState({});
   
    console.log(`userName>>132`, userName);
    
    const fetchData = async (userName) => {
        let query = `
            query {
                getUserByUserName(UserName: "${userName}"){
                    UserName,
                    UserType,
                    FirstName,
                    LastName,
                    AppointmentId,
                    Age,
                    LicenseNumber,
                    Dob,
                    RegistrationDate,
                    Make,
                    Model,
                    PlateNumber
                }
            }
        `;

        fetch('http://localhost:7700/graphql',{
            method: 'Post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({query})
        }).then(async(response) => {
            let userList = await response.json();
            console.log('userList:>>156:', JSON.stringify(userList.data));
            setUserDetails(userList.data.getUserByUserName)
        })
    }

    useEffect(function () {
        fetchData(userName)
    }, [userName]);

    return (
        <div>
            <UserDetailsForm UserInfo={userDetails} />
        </div>
    )
}

export default FetchUserDetails;