import Home from "../pages/HomePage";
import Login from "../pages/login";
// import Registration from "./registration";
import FetchUser from "../pages/FetchUser";
import AddUserDetails from "../pages/AddUserDetails";

export const nav = [
    { path: "/",                  name: "Driver Test", element: <Home />,          isMenu: true,     isPrivate: false  },
    { path: "/driver/addDetails", name: "Add Details", element: <AddUserDetails/>, isMenu: true,     isPrivate: true  },
    { path: "/driver/details",    name: "Driver",      element: <FetchUser />,     isMenu: true,     isPrivate: true  },
    { path: "/registration",      name: "Login",       element: <Login />,         isMenu: false,    isPrivate: false  },
]