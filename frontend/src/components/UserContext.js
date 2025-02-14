import React, {createContext, useState, useEffect} from "react";

export const UserContext=createContext();

export const UserProvider=({children})=>{
    const[user,setUser]=useState(()=>{
        const savedUser=localStorage.getItem("user");
        return savedUser?JSON.parse(savedUser):null;
    });
    const[loggedIn,setLoggedIn]=useState(()=>{
        return localStorage.getItem("loggedIn")==="true";
    });
    useEffect(()=>{
        if (user){
            const username={username:user.username};
            localStorage.setItem("user",JSON.stringify(username));
        }
        else{
            localStorage.removeItem("user");
        }
        localStorage.setItem("loggedIn",loggedIn.toString());
    },[user,loggedIn]);
    

    return(
        <UserContext.Provider value={{user,setUser,loggedIn,setLoggedIn}}>
            {children}
        </UserContext.Provider>
    );
};