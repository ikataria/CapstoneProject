import React from 'react';
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';



// Login HTML 
const LoginForm = ({ LoginUser, props }) => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = document.forms.loginUserForm;

        const userCreds = {
            userName: form.userName.value.trim(),
            password: form.password.value.trim(),
        }

        LoginUser(userCreds);
    }

    return (
        <div>
            <form name="loginUserForm" onSubmit={handleSubmit}>
                {/* <h2>Log-In</h2> */}
                <h2 className="homePageNewBanner">LOG-IN</h2>
                <br />
                <br />
                <br />

                <div className="form-group row">
                    <label htmlFor="userName" className="col-sm-4 col-form-label col-form-label-lg">Username</label>
                    <div className="col-sm-6">
                        <input name="userName" placeholder="User Name" type="text" className="form-control form-control-lg" minlength="3" maxlength="25" required></input>
                    </div>
                </div>
                <br />

                <div className="form-group row">
                    <label htmlFor="password" className="col-sm-4 col-form-label col-form-label-lg">Password</label>
                    <div className="col-sm-6">
                        <input name="password" className="form-control form-control-lg" type="password" placeholder="Password" minlength="6" maxlength="20" required></input>
                    </div>
                </div>
                <br />

                <div className="form-group">
                    <input type="submit" value="Login" className="btn btn-danger btn-lg" />
                </div>
                <br />

            </form>

            <button className="btn btn-link" onClick={() => props.onFormSwitch('registration')}>Don't have an account? Register here.</button>
        </div>
    )
}

// Hit API
const LoginUser = (props) => {
    const navigate = useNavigate();
    const [user, setUser] = useState([]);
    const params = useLocation().search;
    const userType = new URLSearchParams(params).get('userType');



    const fetchData = async (userCreds) => {
        let query = `
            query {
                getUserByUserName(userName:"${userCreds.userName}") {
                    userName
                    password
                    userType
                }
            }
        `;
        fetch('http://localhost:7700/graphql', {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ query })
        }).then(async (response) => {
            const userDataObj = await response.json();
            const userData = userDataObj.data.getUserByUserName;

            if (!userData || userData.password != userCreds.password) {
                alert('Invalid username or password')
            }
            else {
                alert(`Welcome ${userData.userName}`)
                console.log(`Data match. Ready for login`);
                navigate('/driver/addDetails')
            }

        })
    }


    return (
        <div>
            <LoginForm LoginUser={fetchData} props={props} />
        </div>
    )
}

export default LoginUser;