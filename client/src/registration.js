import React from 'react';

import LoginUser from './login';

// Registration HTML & Validation
const RegistrationForm = ({RegisterUser}) => {

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
                <h2>Sign-Up</h2>
                <div>
                    <label for="userName">Username</label>
                    <input name="userName" type="text" placeholder="User Name"></input>
                </div>

                <div>
                    <label for="password">Password</label>
                    <input name="password" type="text" placeholder="Password"></input>
                </div>

                <div>
                    <label for="confirmPassword">Confirm Password</label>
                    <input name="confirmPassword" type="text" placeholder="Confirm Password"></input>
                </div>

                <div>
                    <label for="userType">User Type</label>

                    <select name="userType" id="userType">
                        <option value="driver">Driver</option>
                        <option value="examiner">Examiner</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>

                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>

            
            <div>
                <LoginUser />
            </div>
        </div>
    )
}

// Hit API
const CreateUser = () => {
  
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
            method:'post',
            headers: {'Content-Type': 'application/json'},
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
            console.log(__filename,`data to savedData 82`, JSON.stringify(savedData));
            alert(`${JSON.stringify(savedData.data.addUser.userName)} registered successfully.`)
        })

    }

    return (
        <div>
            <RegistrationForm RegisterUser={RegisterUser} />
        </div>
    )
}

export default CreateUser;