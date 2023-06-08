import {Route, Routes } from "react-router-dom";

import HomePage from "./HomePage";
// import EmployeeSearch from "./EmployeeSearch";
// import EmployeeDirectory from "./EmployeeDirectory";
// import EmployeeEdit from "./EmployeeEdit";
// import EmployeeCreate from "./EmployeeCreate";
// import EmployeeRetirement from "./EmployeeRetirement";

import CreateUser from "./registration";
import FetchUser from "./FetchUser";


function pageRoutes() {
    return (
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/registration' element={<CreateUser/>} />
            <Route path='/fetchUser' element={<FetchUser/>} />
        </Routes>
    )
}

export default pageRoutes;