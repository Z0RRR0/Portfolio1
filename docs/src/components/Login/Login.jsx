import React, {useState, useContext} from 'react'
import UserContext from '../../contexts/User/UserContext'
import Profile from '../Profile/Profile'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) =>{
      e.preventDefault()
      setUser({username, password})
    }
  return (
    <div className="relative flex items-top justify-center min-h-[700px] dark:bg-slate-800 bg-white sm:items-center sm:pt-0">
        <div className="p-[10%] h-full  m-[10%] dark:bg-slate-950 bg-gray-100 rounded-lg flex flex-col">
            <h2 className='dark:text-white font-bold text-2xl px-2 text-center mb-4 uppercase font-serif'>Log in</h2>
            <div className='w-full grid place-content-center'>
              <h2 className='text-center grid border-b-4 rounded-2xl border-yellow-400 w-30 mb-4'></h2>
            </div>
            <input
            className='dark:bg-amber-50 bg-white sm:w-70 rounded mx-2 my-2 px-2 py-1' 
            type="text" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='username' />
            {" "}
            <input 
            className='dark:bg-amber-50 bg-white sm:w-70 rounded mx-2 my-2 px-2 py-1'
            type="text" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} placeholder='password' />
            <button className='dark:bg-orange-400 bg-indigo-400 sm:w-70 rounded mx-2 my-2 px-2 py-1 hover:cursor-pointer hover:bg-indigo-700 hover:text-white dark:hover:bg-orange-600 dark:hover:text-white' onClick={handleSubmit}>Submit</button>
            <div className='w-full grid place-content-center'>
              <h2 className='text-center grid border-b-4 rounded-2xl border-yellow-400 w-30 mt-4'></h2>
            </div>
            <Profile />
        </div>

    </div>
    
  )
}

export default Login