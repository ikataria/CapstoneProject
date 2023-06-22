import React from 'react';
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';



// Login HTML 
const LoginForm = ({LoginUser}) => {

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
                <h2>Log-In</h2>
                <div>
                    <label for="userName">Username</label>
                    <input name="userName" type="text" placeholder="User Name"></input>
                </div>

                <div>
                    <label for="password">Password</label>
                    <input name="password" type="text" placeholder="Password"></input>
                </div>

                <div>
                    <input type="submit" value="Login" />
                </div>
            </form>
        </div>
    )
}

// Hit API
const LoginUser = () => {
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
        fetch('http://localhost:7700/graphql',{
            method:'post',
            headers:{'Content-type':'application/json'},
            body: JSON.stringify({query})
        }).then(async(response) => {
            const userDataObj = await response.json();
            const userData = userDataObj.data.getUserByUserName;

            if(!userData || userData.password != userCreds.password ){
                alert('Invalid username or password')
            }
            else{
                alert(`Welcome ${userData.userName}`)
                console.log(`Data match. Ready for login`);
                navigate('/driver/addDetails')
            }

        })
    }


    return (
        <div>
            <LoginForm LoginUser={fetchData} />
        </div>
    )
}

export default LoginUser;