import React from 'react';
import { useReducer, useState, useEffect } from "react";
// import { useReducer, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
import { AuthData } from "../../auth/AuthWrapper";



// Login HTML 
const LoginForm = ({ LoginUser, props }) => {

    const navigate = useNavigate();
    const { login } = AuthData();
    const [formData, setFormData] = useReducer((formData, newItem) => { return ({ ...formData, ...newItem }) }, { userName: "", password: "" })
    const [errorMessage, setErrorMessage] = useState(null)


    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = document.forms.loginUserForm;

        const userCreds = {
            userName: form.userName.value.trim(),
            password: form.password.value.trim(),
        }

        try {
            login(userCreds.userName, userCreds.password)
                .then(loginResult => {
                    // console.log(__filename,`loginResult: 32:`, loginResult);
                    // console.log(`login successfull`)
                    navigate("/driver/addDetails");
                })
                .catch((err) => {
                    console.log(`FE File: login.js, line 37, err:`,err);
                    navigate("/registration");
                    alert('Wrong Credentials, try again.')
                })
            // let loginResult = login(userCreds.userName, userCreds.password);
            
            // console.log(`loginResult>31>`, loginResult);
            // if(loginResult){
            //     console.log(`login successfull`)
            //     navigate("/driver/addDetails");
            // }else{
            //     navigate("/registration");
            //     alert('Wrong Credentials, try again.')
            // }
        } catch (error) {
            console.log(`No response from login API`);
            // setErrorMessage(error)
        }
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     const form = document.forms.loginUserForm;

    //     const userCreds = {
    //         userName: form.userName.value.trim(),
    //         password: form.password.value.trim(),
    //     }

    //     LoginUser(userCreds);
    // }

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
                        <input name="userName" placeholder="User Name" type="text" className="form-control form-control-lg" minlength="3" maxlength="25" required value={formData.userName} onChange={(e) => setFormData({userName: e.target.value}) }></input>
                    </div>
                </div>
                <br />

                <div className="form-group row">
                    <label htmlFor="password" className="col-sm-4 col-form-label col-form-label-lg">Password</label>
                    <div className="col-sm-6">
                        <input name="password" className="form-control form-control-lg" type="password" placeholder="Password" minlength="6" maxlength="20" required value={formData.password} onChange={(e) => setFormData({password: e.target.value}) }></input>
                    </div>
                </div>
                <br />

                <div className="form-group">
                    <input type="submit" value="Login" className="btn btn-danger btn-lg" />
                </div>
                <br />
                {errorMessage ?
                    <div className="error">{errorMessage}</div>
                    : null }
            </form>

            <button className="btn btn-link" onClick={() => props.onFormSwitch('registration')}>Don't have an account? Register here.</button>
            <br />
            <br />
        </div>
    )
}

// Hit API
const LoginUser = (props) => {
    const navigate = useNavigate();
    // const [user, setUser] = useState([]);
    // const params = useLocation().search;
    // const userType = new URLSearchParams(params).get('userType');



    // fetchData function is not in use
    const fetchData = async (userCreds) => {

        console.log(`122, ye fetchData() kabhi call nhi hoga>>>>>>>>>`);
        
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
    //--------- NO use of above function


    return (
        <div>
            <LoginForm LoginUser={fetchData} props={props} />
        </div>
    )
}

export default LoginUser;