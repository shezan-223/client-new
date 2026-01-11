import { createContext, useContext } from "react";

const AuthContext=createContext(null)
export const useAuth =()=>{
    const context =useContext(AuthContext)
    return context
}



export default AuthContext