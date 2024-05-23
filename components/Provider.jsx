'use client';
import userContext from "@utils/userContext";
import React,{useState} from "react";


const Provider = ({ children }) => {
    const [user, setUser] = useState(null)

    return (
        <userContext.Provider value={{user, setUser}}>
            {children}
        </userContext.Provider>
    )
}

export default Provider;