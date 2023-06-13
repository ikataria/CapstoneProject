import {Route, Routes } from "react-router-dom";

import HomePage from "./HomePage";


import CreateUser from "./registration";
import AddUserDetails from "./AddUserDetails";
// import FetchUser from "./FetchUser";


function pageRoutes() {
    return (
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/registration' element={<CreateUser/>} />
            <Route path='/driver/addDetails' element={<AddUserDetails/>} />
            {/* <Route path='/fetchUser' element={<FetchUser/>} /> */}
        </Routes>
    )
}

export default pageRoutes;