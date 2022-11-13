import React, { useContext } from "react";
import Logo from '../../components/image/Logo1.png'
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const Login = () => {

    const {state,handleFunction} = useContext(AuthContext)

    const {
        input,setInput
    } = state
    const {
        handleInputLogin,
        handleLogin
    } = handleFunction

    return(
        <>
        <div className="mx-auto mt-40 my-auto p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <img className="w-32 mx-auto mb-10" src={ Logo }/>
            <hr/>
            <form onSubmit={handleLogin} className="space-y-6" action="#">
                <h5 className="text-xl mt-2 text-center font-medium text-gray-900 dark:text-white">Sign in</h5>
                <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                <input
                value={input.email}
                onChange={handleInputLogin} 
                type="email" 
                name="email" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                placeholder="name@company.com" required />
                </div>
                <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                <input
                value={input.password}
                onChange={handleInputLogin} 
                min="8"
                type="password" 
                name="password" 
                placeholder="••••••••" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                </div>
                <button type="submit" className="w-full text-white bg-teal-300 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">Login</button>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered? <Link to={'/register'} className="text-teal-700 hover:underline dark:text-teal-500">Create account</Link>
                </div>
            </form>
        </div>
        </>
    )
}

export default Login