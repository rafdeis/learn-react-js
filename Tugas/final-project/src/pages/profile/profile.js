import Cookies from "js-cookie";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";

const Profile = () => {

    const [dataUser, setDataUser] = useState(JSON.parse(Cookies.get('user')))

    const {state} = useContext(AuthContext)

    const {
        
    } = state

    return(
        <>
        <div className="max-y-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <h1 className="mb-2 text-6xl mt-10 tracking-tight text-black dark:text-white text-center">Profile</h1>
            <img className="rounded-full w-56 mx-auto mt-10 mb-10" src={dataUser?.image_url} alt="" />
        <div className="p-5 text-center my-10 mx-10 mb-5">           
            <h5 className="mb-2 text-2xl tracking-tight text-black dark:text-white">{dataUser?.name}</h5>
            <p className="mb-3 font-normal text-xl text-gray-700 dark:text-gray-400">{dataUser?.email}</p>
            <p className="mb-3 font-normal text-xl text-gray-700 dark:text-gray-400">{dataUser?.created_at}</p>
        </div>
        </div>        
        </>
    )
}

export default Profile