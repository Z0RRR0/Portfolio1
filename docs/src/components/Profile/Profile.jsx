import React, {useContext} from 'react'
import UserContext from '../../contexts/User/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    
    if (!user) return  <div className='dark:text-white text-center sm:w-70 pt-8 font-semibold text-xl sm:pl-4 font-serif'>please login</div>

    return <div className='dark:text-white text-center sm:w-70 pt-8 font-semibold text-xl sm:pl-4 font-serif'>Welcome {user.username}</div>
}

export default Profile