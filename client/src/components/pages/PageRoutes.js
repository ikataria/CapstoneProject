import React from "react";
import { useState, useEffect } from "react";
import {Route, Routes } from "react-router-dom";

import HomePage from "./HomePage";
import Registration from "./registration";
import Login from "./login";
import AddUserDetails from "./AddUserDetails";
import FetchUserDetails from "./FetchUser";

function PageRoutes() {
    const [currentForm, setCurrentForm] = useState('login');
    
    const toggleForm = (formName) => {setCurrentForm(formName)}

    return (
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/registration' element={currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Registration onFormSwitch={toggleForm}/>} />
            <Route path='/driver/addDetails' element={<AddUserDetails/>} />
            <Route path='/driver/details/:userName' element={<FetchUserDetails/>} />
        </Routes>
    )
}

export default PageRoutes;