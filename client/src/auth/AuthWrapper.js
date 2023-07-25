import { createContext, useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

import { RenderHeader } from "../components/structure/Header";
import { RenderFooter } from "../components/structure/Footer";

import { RenderMenu, RenderRoutes } from "../components/structure/RenderNavigation";

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);


export const AuthWrapper = () => {

     const [ user, setUser ] = useState({name: "", isAuthenticated: false});
     const navigate = useNavigate();

     const login = async (userName, password) => {

          // console.log(`before fetch API line 18>>`);

               let query = `
                    query {
                         getUserByUserName(userName:"${userName}"){
                              userName,
                              password
                         }
                    }
               `;
   
               function fetchLoginCred(){
                    return new Promise((resolve, reject)=>{
                         fetch('http://localhost:7700/graphql',{
                              method: 'POST',
                              headers: { 'Content-Type': 'application/json' },
                              body: JSON.stringify({ query })
                         }).then(async(response) => {
                              const userDetailsObj = await response.json();
                              let userDetails = userDetailsObj.data.getUserByUserName;
                             
                              // console.log(`line 41, authWrapper, userDetails::>`, userDetails);
                         
                              if(userDetails && userDetails.password === password){
                                   // console.log(__filename,`Correct username & pwd`);
                                   setUser({name: userName, isAuthenticated: true});
                                   resolve("success");
                              } else {
                                   // console.log(__filename,`Incorrect pwd or username`);
                                   reject("Incorrect password");
                              }                             
                            
                         }).catch((err) => { 
                              console.log(__filename,'Fetch method errr', err)
                         })
                    })
               }


               await fetchLoginCred()
               
          // console.log(`line 61`);

          
     }

     // useEffect(()=>{
     //     login()
     // },[])

     const logout = () => {
          setUser({...user, isAuthenticated: false});
          navigate("/registration");
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