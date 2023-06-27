import React from 'react';

// Registration HTML & Validation
const RegistrationForm = ({ RegisterUser, props }) => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = document.forms.addUser;

        const singleUser = {
            userName: form.userName.value.trim(),
            password: form.password.value.trim(),
            userType: form.userType.value.trim()
        }

        RegisterUser(singleUser);

    }

    return (
        <div>
            <form name="addUser" onSubmit={handleSubmit}>
            <h2 className="homePageNewBanner">REGISTRATION FORM</h2>
                <br />
                <br/>
                <br/>

                <div className="form-group row">
                    <label htmlFor="userName" className="col-sm-4 col-form-label col-form-label-lg">Username</label>
                    <div className="col-sm-6">
                        <input name="userName" type="text" placeholder="User Name" className="form-control form-control-lg" minlength="3" maxlength="25" required></input>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                </div>
                <br />

                <div className="form-group row">
                    <label htmlFor="password" className="col-sm-4 col-form-label col-form-label-lg">Password</label>
                    <div className="col-sm-6">
                        <input name="password" type="password" placeholder="Password" className="form-control form-control-lg" minlength="6" maxlength="20" required></input>
                    </div>
                </div>
                <br />

                <div className="form-group row">
                    <label htmlFor="confirmPassword" className="col-sm-4 col-form-label col-form-label-lg">Confirm Password</label>
                    <div className="col-sm-6">
                        <input name="confirmPassword" type="password" placeholder="Confirm Password" className="form-control form-control-lg" minlength="6" maxlength="20" required></input>
                    </div>
                </div>
                <br />

                <div className="form-group row">
                    <label htmlFor="userType" className="col-sm-4 col-form-label col-form-label-lg">User Type</label>

                    <div className="col-sm-6">
                        <select name="userType" className="btn btn-light dropdown-toggle form-control" id="userType">
                            <option className="dropdown-item" selected>Choose...</option>
                            <option className="dropdown-item" value="driver">Driver</option>
                            <option className="dropdown-item" value="examiner">Examiner</option>
                            <option className="dropdown-item" value="admin">Admin</option>
                        </select>
                    </div>

                </div>
                <br />

                <div className="form-group">
                    <input type="submit" value="Submit" className="btn btn-success btn-lg" />
                </div>
                <br />

            </form>

            <br />
            <button className="btn btn-link" onClick={() => props.onFormSwitch("login")}>Already have an account? Login here.</button>
        </div>
    )
}

// Hit API
const CreateUser = (props) => {

    const RegisterUser = (singleUser) => {
        let query = `
            mutation AddUser($userName: String!, $password: String!, $userType: String!){
                addUser(userName: $userName, password: $password, userType: $userType){
                    id
                    userName
                    password
                    userType
                }
            }
        `;

        fetch('http://localhost:7700/graphql', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query,
                variables: {
                    userName: singleUser.userName,
                    password: singleUser.password,
                    userType: singleUser.userType
                }
            })
        }).then(async (response) => {
            let savedData = await response.json();
            console.log(__filename, `data to savedData 82`, JSON.stringify(savedData));
            alert(`${JSON.stringify(savedData.data.addUser.userName)} registered successfully.`)
        })

    }

    return (
        <div>
            <RegistrationForm RegisterUser={RegisterUser} props={props} />
        </div>
    )
}

export default CreateUser;