// import React from 'react';
// import { useState, useEffect } from "react";
// import { useLocation } from 'react-router-dom';


// // Registration HTML & Validation
// const RegistrationForm = ({RegisterUser}) => {

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const form = document.forms.addUser;

//         const singleUser = {
//             userName: form.userName.value.trim(),
//             password: form.password.value.trim(),
//             userType: form.userType.value.trim()
//         }

//         RegisterUser(singleUser);
       
//     }

//     return (
//         <div>
//             <form name="addUser" onSubmit={handleSubmit}>
//                 <h2>User Details</h2>
//                 <div>
//                     <label for="firstName">First Name</label>
//                     <input name="firstName" type="text" placeholder="First Name"></input>
//                 </div>

//                 <div>
//                     <label for="lastName">Last Name</label>
//                     <input name="lastName" type="text" placeholder="Last Name"></input>
//                 </div>

//                 <div>
//                     <label for="licenseNumber">License Number</label>
//                     <input name="licenseNumber" type="text" placeholder="License Number"></input>
//                 </div>

//                 <div>
//                     <label for="age">Age</label>
//                     <input name="age" type="number" placeholder="Age"></input>
//                 </div>

//                 <div>
//                     <label for="dob">DOB</label>
//                     <input name="dob" type="text" placeholder="DOB"></input>
//                 </div>

//                 <br/>
//                 <h2>Car Details</h2>
//                 <div>
//                     <label for="make">Make</label>
//                     <input name="make" type="text" placeholder="Make"></input>
//                 </div>

//                 <div>
//                     <label for="year">Year</label>
//                     <input name="year" type="number" placeholder="year"></input>
//                 </div>

//                 <div>
//                     <label for="plateNumber">Plate Number</label>
//                     <input name="plateNumber" type="text" placeholder="Plate Number"></input>
//                 </div>

//                 <br/>
//                 <div>
//                     <input type="submit" value="Submit" />
//                 </div>
//             </form>

            
         
//         </div>
//     )
// }

// // Hit API
// const FetchUser = () => {
//     const [user, setUser] = useState([]);
//     const params = useLocation().search;
//     const userType = new URLSearchParams(params).get('userType');

//     // let query = `
//     //     query {
//     //         userDirectory {
//     //             _id
//     //             id
//     //             userName
//     //             password
//     //             userType
//     //         }
//     //     }
//     // `;

//     // function fetchData(){
//     //     fetch('http://localhost:7700/graphql',{
//     //         method:'post',
//     //         headers:{'Content-type':'application/json'},
//     //         body: JSON.stringify({query})
//     //     }).then(async(response) => {
//     //         let tempUsers = await response.json();

//     //         let tempDirectory = tempUsers.data.userDirectory;

//     //         let result = [] ;
//     //         tempUsers.data.userDirectory.forEach(e=>{

//     //             if(e.userType == userType){
//     //                 result.push(e);
//     //             } 
  
//     //         })

//     //         let toDisplay = result.length > 0 ? result: tempDirectory;
//     //         // console.log('toDisplay>>>>>>',toDisplay);
//     //         setUser(toDisplay);
//     //     })
//     // }

//     // useEffect(() => {
//     //     fetchData()
//     // },[userType]);

//     const RegisterUser = (singleUser) => {
//         let query = `
//             mutation AddUser($userName: String!, $password: String!, $userType: String!){
//                 addUser(userName: $userName, password: $password, userType: $userType){
//                     id
//                     userName
//                     password
//                     userType
//                 }
//             }
//         `;

//         fetch('http://localhost:7700/graphql', {
//             method:'post',
//             headers: {'Content-Type': 'application/json'},
//             body: JSON.stringify({
//                 query,
//                 variables: {
//                     userName: singleUser.userName,
//                     password: singleUser.password,
//                     userType: singleUser.userType
//                 }
//             })
//         }).then(async (response) => {
//             let savedData = await response.json();
//             console.log(__filename,`data to savedData 82`, savedData);
//             alert(`${JSON.stringify(savedData.data)} registered successfully.`)
//         })

//     }

//     return (
//         <div>
//             <RegistrationForm RegisterUser={RegisterUser} />
//         </div>
//     )
// }

// export default FetchUser;