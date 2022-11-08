import Cookies from "js-cookie";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

    let navigate = useNavigate()

    return(
        <>
        <ul>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            {!Cookies.get('token') &&
                <li>
                <Link to={'/login'}>Login</Link>
                </li>
            }
            {
                Cookies.get('token') &&
                <li>
                    <span onClick={() => {
                        Cookies.remove('token')
                        navigate('login')
                    }}>Logout</span>
                </li>
            }
        </ul>
        </>
    )
}

export default Navbar