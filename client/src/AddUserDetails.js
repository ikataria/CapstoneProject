import React from 'react';


// user detail form
const UserDetailsForm = ({ SaveUserInfo }) => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = document.forms.userForm;

        const userObj = {
            userName: form.userName.value.trim(),
            firstName: form.firstName.value.trim().toLowerCase(),
            lastName: form.lastName.value.trim().toLowerCase(),
            licenseNumber: form.licenseNumber.value.trim().toLowerCase(),
            dob: form.dob.value.trim(),
            make: form.make.value.trim().toLowerCase(),
            model: form.model.value.trim().toLowerCase(),
            // year: form.year.value.trim(),
            plateNumber: form.plateNumber.value.trim().toLowerCase(),
        }

        SaveUserInfo(userObj);

    }

    return (
        <div>
            <form name="userForm" onSubmit={handleSubmit}>
                <h2>Provide your details.</h2>
                <div>
                    <label for="userName">username</label>
                    <input name="userName" type="text" placeholder="UserName"></input>
                </div>
                <div>
                    <label for="firstName">Firstname</label>
                    <input name="firstName" type="text" placeholder="First Name"></input>
                </div>

                <div>
                    <label for="lastName">Lastname</label>
                    <input name="lastName" type="text" placeholder="Password"></input>
                </div>

                <div>
                    <label for="licenseNumber">License Number</label>
                    <input name="licenseNumber" type="text" placeholder="License Number"></input>
                </div>

                <div>
                    <label for="dob">Birth Date</label>
                    <input name="dob" type="date" placeholder="Birth date"></input>
                </div>

                <div>
                    <label for="make">Vehicle make</label>
                    <input name="make" type="text" placeholder="Manufacture Name"></input>
                </div>

                <div>
                    <label for="model">Vehicle Model</label>
                    <input name="model" type="text" placeholder="Manufacture Model"></input>
                </div>

                {/* <div>
                    <label for="year">Purchased Year</label>
                    <input name="year" type="text" placeholder="Car Year"></input>
                </div> */}

                <div>
                    <label for="plateNumber">Plate Number</label>
                    <input name="plateNumber" type="text" placeholder="Plate Number"></input>
                </div>

                {/* <div>
                    <label for="plateNumber">Plate Number</label>
                    <input name="plateNumber" type="text" placeholder="Plate Number"></input>
                </div> */}

                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>


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
            console.log(__filename, `data to savedData 82`, savedData.data);
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