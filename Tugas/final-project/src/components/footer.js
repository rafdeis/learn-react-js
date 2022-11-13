import React from "react";

const Footer = () => {
    return(
        <>
        <footer className="p-4 container mx-auto rounded bg-teal-100 md:flex md:items-center md:justify-between md:py-6 dark:bg-gray-800">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 . Abdurrafi BATCH 39.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
            {/* <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
            </li>
            <li>
            <a href="#" className="hover:underline">Contact</a>
            </li> */}
        </ul>
        </footer>
        </>
    )
}

export default Footer