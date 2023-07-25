import Home from "../pages/HomePage";
import Login from "../pages/login";
import FetchUser from "../pages/driver/FetchUser";
import AddUserDetails from "../pages/driver/AddUserDetails";
import CreateAppointment from "../pages/admin/CreateAppointment.js";
import FetchDriversResults from "../pages/admin/FetchDriversResults.js";
import EvaluationByExaminer from "../pages/examiner/EvaluationByExaminer.js";

// export const nav = [
//     { path: "/",                        name: "Driver Test",           element: <Home />,                 isMenu: true,     isPrivate: false  },
//     { path: "/registration",            name: "Login",                 element: <Login />,                isMenu: false,    isPrivate: false  },
//     { path: "/driver/addDetails",       name: "Add Details",           element: <AddUserDetails/>,        isDriverMenu: true,     isPrivate: true  },
//     { path: "/driver/details",          name: "Driver",                element: <FetchUser />,            isDriverMenu: true,     isPrivate: true  },
//     { path: "/admin/createAppointment", name: "Create Appointment",    element: <CreateAppointment />,    isAdminMenu: true,    isPrivate: true  },
//     { path: "/admin/fetchResults",      name: "Fetch Drivers Results", element: <FetchDriversResults />,  isAdminMenu: true,    isPrivate: true  },
//     { path: "/examiner/evaluation",     name: "Examiner",              element: <EvaluationByExaminer />, isExaminerMenu: true,    isPrivate: true  },
// ]

export const nav = [
    { path: "/",                        name: "Driver Test",           element: <Home />,                 isMenu: true,     isPrivate: false  },
    { path: "/registration",            name: "Login",                 element: <Login />,                isMenu: false,    isPrivate: false  },
    { path: "/driver/addDetails",       name: "Add Details",           element: <AddUserDetails/>,        isMenu: true,     isPrivate: true  },
    { path: "/driver/details",          name: "Driver",                element: <FetchUser />,            isMenu: true,     isPrivate: true  },
    { path: "/admin/fetchResults",      name: "Fetch Drivers Results", element: <FetchDriversResults />,  isMenu: true,     isPrivate: true  },
    { path: "/admin/createAppointment", name: "Create Appointment",    element: <CreateAppointment />,    isMenu: true,     isPrivate: true  },

]