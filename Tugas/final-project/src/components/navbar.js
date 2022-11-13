import React, { useContext } from "react";
import { Navbar,Dropdown,Avatar } from "flowbite-react";
import { Link } from "react-router-dom";
import Logo from './image/Logo1.png'
import Cookies from "js-cookie";
import { AuthContext } from "../context/authContext";

const Navigation = () => {

    const {state, handleFunction} = useContext(AuthContext)

    const {
    } = state
    const {
        handleLogout
    } = handleFunction

    return(
        <>
        <Navbar
        fluid={false}
        rounded={true}
        >
        <div className="p-4 container shadow-lg flex flex-wrap justify-between items-center mx-auto rounded border border-gray-200 dark:border-gray-600">
        <Navbar.Brand>
            <img
            src={Logo}
            className="mr-3 w-10 sm:w-12 h-6 sm:h-9"
            alt="Lp Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Web
            </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
        <li>
            <Link to={'/'} className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-300 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Beranda</Link>
        </li>
        <li>
            <Link to={'/lowongan'} className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-300 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Lowongan</Link>
        </li>
        </Navbar.Collapse>
        <Navbar.Collapse>
        {!Cookies.get('token')&&
        <>
        <li>
        <Link to={'/login'} type="button" className="flex text-white bg-teal-300 hover:bg-blue-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" /></svg> Login</Link>
        </li>
        </>
        }
        {Cookies.get('token')&&
        <>
        <li>
            <Link to={'/dashboard'} className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-300 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Dashboard</Link>
        </li>
        <li>
            <Link onClick={handleLogout} className="flex block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>Log Out</Link>
        </li>
        </>
        }
        </Navbar.Collapse>
        </div>
        </Navbar>        
        </>
    )
}

export default Navigation