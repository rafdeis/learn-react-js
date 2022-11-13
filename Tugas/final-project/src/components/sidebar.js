import React from "react";
import { Link } from "react-router-dom";
import Logo from './image/Logo1.png'

const Sidebar = () => {
    return(
        <>
<div className="h-screen hidden lg:block shadow-lg relative w-80">
  <div className="bg-white h-full dark:bg-gray-700 ">
    <div className="flex items-center justify-start pt-6 ml-8">
    <img
            src={Logo}
            className="mr-3 w-10 sm:w-12 h-6 sm:h-9"
            alt="Lp Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Web
            </span>
    </div>
    <nav className="mt-6">
      <div>
        <Link to={'/dashboard'} className="w-full text-gray-400 flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-teal-400 border-l-4 border-transparent">
          <span className="text-left">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>
          </span>
          <span className="mx-4 text-sm font-normal">
            Dashboard
          </span>
        </Link>
        <Link to={'/dashboard/list-job-vacancy'} className="w-full text-gray-400 flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-teal-400 border-l-4 border-transparent">
          <span className="text-left">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
          </span>
          <span className="mx-4 text-sm font-normal">
            List Job
          </span>
        </Link>
        <Link to={'/dashboard/list-job-vacancy/form'} className="w-full text-gray-400 flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-teal-400 border-l-4 border-transparent">
          <span className="text-left">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
          </span>
          <span className="mx-4 text-sm font-normal">
            Create New Job
          </span>
        </Link>
        <Link to={'/dashboard/profile'} className="w-full text-gray-400 flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-teal-400 border-l-4 border-transparent">
          <span className="text-left">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
          </span>
          <span className="mx-4 text-sm font-normal">
            Profile
          </span>
        </Link>
        <Link to={'/dashboard/change-password'} className="w-full text-gray-400 flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-teal-400 border-l-4 border-transparent">
          <span className="text-left">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>
          </span>
          <span className="mx-4 text-sm font-normal">
            Manage Password
          </span>
        </Link>
      </div>
    </nav>
  </div>
</div>

        </>
    )
}

export default Sidebar