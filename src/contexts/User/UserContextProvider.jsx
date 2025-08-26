import React from "react";
import UserContext from "./UserContext";

// creating a user context provider
const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

// exporting user context provider
export default UserContextProvider;