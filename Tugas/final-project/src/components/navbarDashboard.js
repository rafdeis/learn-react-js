import { Navbar,Dropdown,Avatar } from "flowbite-react";
import Cookies from "js-cookie";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const NavbarDashboard = () => {

    const [dataUser, setDataUser] = useState(JSON.parse(Cookies.get('user')))

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
        <div className="container w-full flex flex-wrap justify-between items-center">
        <div className="flex md:order-2">
            <Dropdown
            arrowIcon={false}
            inline={true}
            label={<Avatar alt="User settings" img={dataUser?.image_url} rounded={true}/>}
            >
            <Dropdown.Header>
                <span className="block text-sm">
                {dataUser?.name}
                </span>
                <span className="block truncate text-sm font-medium">
                {dataUser?.email}
                </span>
            </Dropdown.Header>
            <Dropdown.Item>
                <Link to={'/dashboard'}>
                Dashboard
                </Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Link to={'/dashboard/profile'}>
                Profile
                </Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Link to={'/dashboard/change-password'}>
                Settings Password
                </Link>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleLogout}>
                Sign out
            </Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
        <li>
            <Link to={'/'} className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-teal-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-300 md:p-0 dark:text-teal-300 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Beranda</Link>
        </li>
        <li>
            <Link to={'/lowongan'} className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-300 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Lowongan</Link>
        </li>
        </Navbar.Collapse>
        </div>
        </Navbar>
        </>
    )
}

export default NavbarDashboard