import React from 'react'

// creating a user context
const UserContext = React.createContext()   

// exporting user context
export default UserContext;   

// Now we need context provider for user context.
// I created provider in ./UserContextProvider.jsx