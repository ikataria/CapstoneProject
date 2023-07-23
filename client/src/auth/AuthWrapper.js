import { createContext, useContext, useState } from "react"

import { RenderHeader } from "../components/structure/Header";
import { RenderFooter } from "../components/structure/Footer";

import { RenderMenu, RenderRoutes } from "../components/structure/RenderNavigation";

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);


export const AuthWrapper = () => {

     const [ user, setUser ] = useState({name: "", isAuthenticated: false})

     const login = (userName, password) => {

               let query = `
                    query {
                         getUserByUserName(userName:"${userName}"){
                              userName,
                              password
                         }
                    }
               `;
   
               fetch('http://localhost:7700/graphql',{
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ query })
               }).then(async(response) => {
                    const userDetailsObj = await response.json();
                    let userDetails = userDetailsObj.data.getUserByUserName;

                    if(userDetails && userDetails.password === password){
                         setUser({name: userName, isAuthenticated: true})
                         return "success";
                    } else {
                         console.log(`Incorrect pwd or username`);
                         return "Incorrect password"
                    }
               })
     }


     const logout = () => {
          setUser({...user, isAuthenticated: false})
     }


     return (
          
               <AuthContext.Provider value={{user, login, logout}}>
                    <>
                         <RenderHeader />
                         <RenderMenu />
                         <RenderRoutes />
                         <RenderFooter />
                    </>
                    
               </AuthContext.Provider>
          
     )

}