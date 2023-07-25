import React from 'react';
import { AuthData } from "../../../auth/AuthWrapper";


// user detail form
const UserDetailsForm = ({ SaveUserInfo }) => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = document.forms.userForm;


        const userObj = {
            userName: form.userName.value.trim(),
            firstName: form.firstName.value.trim().toLowerCase(),
            lastName: form.lastName.value.trim().toLowerCase(),
            age: parseInt(form.age.value.trim()),
            licenseNumber: form.licenseNumber.value.trim().toLowerCase(),
            make: form.make.value.trim().toLowerCase(),
            model: form.model.value.trim().toLowerCase(),
            year: parseInt(form.year.value.trim()),
            plateNumber: form.plateNumber.value.trim().toLowerCase(),
        }

        console.log(`userObj::>`, userObj);

        SaveUserInfo(userObj);

    }

    const { user } = AuthData();

    return (
        <div>
            <form name="userForm" onSubmit={handleSubmit}>
                <h2 className="homePageNewBanner">PROVIDE YOUR DETAILS</h2>
                <br />
                <br />
                <br />

                <div className="form-group row">
                    <label htmlFor="userName" className="col-sm-4 col-form-label col-form-label-lg">Username</label>
                    <div className="col-sm-6">
                        <input name="userName" type="text" placeholder="Username" className="form-control form-control-lg" minlength="3" maxlength="25" required value={user.name} disabled></input>
                    </div>
                </div>
                <br />

                <div className="form-group row">
                    <label htmlFor="firstName" className="col-sm-4 col-form-label col-form-label-lg">Firstname</label>
                    <div className="col-sm-6">
                        <input name="firstName" id="firstName" type="text" placeholder="First Name" className="form-control form-control-lg" minlength="3" maxlength="25" required></input>
                    </div>
                </div>
                <br />

                <div className="form-group row">
                    <label htmlFor="lastName" className="col-sm-4 col-form-label col-form-label-lg">Lastname</label>
                    <div className="col-sm-6">
                        <input name="lastName" type="text" placeholder="Last Name" className="form-control form-control-lg" minlength="3" maxlength="25" required></input>
                    </div>
                </div>
                <br />

                <div className="form-group row">
                    <label htmlFor="age" className="col-sm-4 col-form-label col-form-label-lg">Age</label>
                    <div className="col-sm-6">
                        <input name="age" type="Number" placeholder="Age" className="form-control form-control-lg" required></input>
                    </div>
                </div>
                <br />

                <div className="form-group row">
                    <label htmlFor="licenseNumber" className="col-sm-4 col-form-label col-form-label-lg">License Number</label>
                    <div className="col-sm-6">
                        <input name="licenseNumber" type="text" placeholder="License Number" className="form-control form-control-lg" minlength="15" maxlength="15" required></input>
                    </div>
                </div>
                <br />

                <div className="form-group row">
                    <label htmlFor="make" className="col-sm-4 col-form-label col-form-label-lg">Vehicle make</label>
                    <div className="col-sm-6">
                        <input name="make" type="text" placeholder="Name of Manufacture " className="form-control form-control-lg" minlength="3" maxlength="25" required></input>
                    </div>
                </div>
                <br />

                <div className="form-group row">
                    <label htmlFor="model" className="col-sm-4 col-form-label col-form-label-lg">Vehicle Model</label>
                    <div className="col-sm-6">
                        <input name="model" type="text" placeholder="Name of Model" className="form-control form-control-lg" minlength="3" maxlength="25" required></input>
                    </div>
                </div>
                <br />

                <div className="form-group row">
                    <label htmlFor="year" className="col-sm-4 col-form-label col-form-label-lg">Manufacture Year</label>
                    <div className="col-sm-6">
                        <input name="year" type="Number" placeholder="Year" className="form-control form-control-lg" required></input>
                    </div>
                </div>
                <br />

                <div className="form-group row">
                    <label htmlFor="plateNumber" className="col-sm-4 col-form-label col-form-label-lg">Plate Number</label>
                    <div className="col-sm-6">
                        <input name="plateNumber" type="text" placeholder="Plate Number" className="form-control form-control-lg" minlength="3" maxlength="25" required></input>
                    </div>
                </div>
                <br />

                <div className="form-group">
                    <input type="submit" value="Submit" className="btn btn-success btn-lg" />
                </div>
            </form>

            <br />
            <br />
        </div>
    )
}

// Hit API
const AddUserDetails = () => {

    const SaveUserInfo = (userObj) => {
        let query = `
            mutation AddUserDetails($userName: String!,$firstName: String!, $lastName: String!, $age:Int!, $licenseNumber: String!, $make: String!, $model: String, $year: Int!, $plateNumber: String!){
                addUserDetails(userName: $userName, firstName: $firstName, lastName: $lastName, age: $age, licenseNumber: $licenseNumber, make: $make, model: $model, year: $year, plateNumber: $plateNumber){
                    userName
                    firstName
                    lastName
                    age
                    licenseNumber
                    make
                    model
                    year
                    plateNumber
                }
            }
        `;

        fetch('http://localhost:7700/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query,
                variables: {
                    userName: userObj.userName,
                    firstName: userObj.firstName,
                    lastName: userObj.lastName,
                    age: userObj.age,
                    licenseNumber: userObj.licenseNumber,
                    make: userObj.make,
                    model: userObj.model,
                    year: userObj.year,
                    plateNumber: userObj.plateNumber
                }
            })
        }).then(async (response) => {
            let savedData = await response.json();
            console.log(`data to savedData 159>>`, JSON.stringify(savedData.data));
            alert(`${savedData.data.addUserDetails.firstName.toUpperCase()}'s details added successfully.`)
        })

    }

    return (
        <div>
            <UserDetailsForm SaveUserInfo={SaveUserInfo} />
        </div>
    )
}

export default AddUserDetails;