import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
    return(
        <>
        <section className="text-gray-700 body-font">
            <div className="container px-5 py-5 mx-auto">
                <div className="flex flex-wrap -m-4 text-center">
                <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <Link to={'/dashboard/list-job-vacancy'}>
                    <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                    <h2 className="title-font font-medium text-3xl text-gray-900">List Job</h2>
                    </div>
                    </Link>
                </div>
                <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <Link to={'/dashboard/list-job-vacancy/form'}>
                    <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                    <h2 className="title-font font-medium text-3xl text-gray-900">Create Job</h2>
                    </div>
                    </Link>
                </div>
                <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <Link to={'/dashboard/profile'}>
                    <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                    <h2 className="title-font font-medium text-3xl text-gray-900">Profile</h2>
                    </div>
                    </Link>
                </div>
                <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <Link to={'/dashboard/change-password'}>
                    <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                    <h2 className="title-font font-medium text-3xl text-gray-900">Setting Password</h2>
                    </div>
                    </Link>
                </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Dashboard