import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import DropdownMenu from "../Dropdown/DropdownMenu"; // import the component



export default function Header() {
  return (
    <>
    <header className='w-full h-auto'>
        {/* navbar goes here */}
        <nav className='w-full h-14 bg-indigo-200 flex justify-between px-4 md:px-4 items-center'>
            <div className='text-2xl text-indigo-700 font-bold'>
                <Link to="/" className="flex items-center">
                    Tushar Bhatt        
                </Link>
            </div>
            <ul className='md:flex hidden font-semibold tracking-tighter'>
                <li className='mx-[10px] cursor-pointer'>
                    <NavLink
                    to="/"
                    className={({isActive}) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                    >
                        Home
                    </NavLink>
                </li>
                <li className='mx-[10px] cursor-pointer'>
                    <NavLink
                    to="/about"
                    className={({isActive}) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                    >
                        About Me
                    </NavLink>
                </li>
                <li className='mx-[10px] cursor-pointer'>
                    <NavLink
                    to="/contact"
                    className={({isActive}) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                    >
                        Contact Me
                    </NavLink>
                </li>
                <li className='mx-[10px] cursor-pointer'>
                    <DropdownMenu />
                </li>
            </ul>
            <div className='hidden md:block px-2 py-2 bg-indigo-700 text-white rounded font-bold cursor-pointer'>
                Login/Sign Up
            </div>
            <div className='md:hidden'>
                <a className='text-4xl font-extrabold' href="#">&#8801;</a>
            </div>
        </nav>
        {/* navbar ends here. */}
        </header>
    </>
  )
}