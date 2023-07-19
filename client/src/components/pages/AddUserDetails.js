import React from 'react';


// user detail form
const UserDetailsForm = ({ SaveUserInfo }) => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = document.forms.userForm;


        const userObj = {
            firstName: form.firstName.value.trim().toLowerCase(),
            lastName: form.lastName.value.trim().toLowerCase(),
            userName: form.userName.value.trim(),
            dob: form.dob.value.trim(),
            licenseNumber: form.licenseNumber.value.trim().toLowerCase(),
            make: form.make.value.trim().toLowerCase(),
            model: form.model.value.trim().toLowerCase(),
            plateNumber: form.plateNumber.value.trim().toLowerCase(),
        }

        console.log(`userObj::>`, userObj);

        SaveUserInfo(userObj);

    }

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
                        <input name="userName" type="text" placeholder="Username" className="form-control form-control-lg" minlength="3" maxlength="25" required></input>
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
                    <label htmlFor="licenseNumber" className="col-sm-4 col-form-label col-form-label-lg">License Number</label>
                    <div className="col-sm-6">
                        <input name="licenseNumber" type="text" placeholder="License Number" className="form-control form-control-lg" minlength="15" maxlength="15" required></input>
                    </div>
                </div>
                <br />

                <div className="form-group row">
                    <label htmlFor="dob" className="col-sm-4 col-form-label col-form-label-lg">Birth Date</label>
                    <div className="col-sm-6">
                        <input name="dob" type="date" placeholder="Birth date" className="form-control form-control-lg" required></input>
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
                    <label htmlFor="plateNumber" className="col-sm-4 col-form-label col-form-label-lg">Plate Number</label>
                    <div className="col-sm-6">
                        <input name="plateNumber" type="text" placeholder="Plate Number" className="form-control form-control-lg" minlength="3" maxlength="25" required></input>
                    </div>
                </div>
                <br />

                <div className="form-group row">
                    <label htmlFor="appointmentDate" className="col-sm-4 col-form-label col-form-label-lg">Appointment Date</label>
                    <div className="col-sm-6">
                        <input name="appointmentDate" type="date" placeholder="Appointment Date" className="form-control form-control-lg" required></input>
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
            mutation AddUserDetails($userName: String!,$firstName: String!, $lastName: String!, $licenseNumber: String!, $dob: String!, $make: String!, $model: String, $plateNumber: String!){
                addUserDetails(userName: $userName, firstName: $firstName, lastName: $lastName, licenseNumber: $licenseNumber, dob: $dob, make: $make, model: $model, plateNumber: $plateNumber){
                    userName
                    firstName
                    lastName
                    licenseNumber
                    dob
                    make
                    model
                    plateNumber
                }
            }
        `;

        fetch('http://localhost:7700/graphql', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query,
                variables: {
                    userName: userObj.userName,
                    firstName: userObj.firstName,
                    lastName: userObj.lastName,
                    licenseNumber: userObj.licenseNumber,
                    dob: userObj.dob,
                    make: userObj.make,
                    model: userObj.model,
                    plateNumber: userObj.plateNumber
                }
            })
        }).then(async (response) => {
            let savedData = await response.json();
            console.log(__filename, `data to savedData 159>>`, JSON.stringify(savedData.data));
            alert(`${JSON.stringify(savedData.data.addUserDetails.firstName)} Details added successfully.`)
        })

    }

    return (
        <div>
            <UserDetailsForm SaveUserInfo={SaveUserInfo} />
        </div>
    )
}

export default AddUserDetails;