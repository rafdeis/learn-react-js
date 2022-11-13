import React, { useContext } from "react";
import Logo from '../../components/image/Logo1.png'
import { AuthContext } from "../../context/authContext";

const Register = () => {

    const {state,handleFunction} = useContext(AuthContext)

    const{
        input,setInput
    } = state
    const {
        handleInputRegister,
        handleRegister
    } = handleFunction

    return(
        <>
        <div className=" my-20 w-1/2 mx-auto bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <img className="w-32 mx-auto mb-10" src={ Logo }/>
            <hr/>
            <form onSubmit={handleRegister} className="space-y-6" action="#">
                <h5 className="text-xl mt-2 text-center font-medium text-gray-900 dark:text-white">Create your account</h5>
                <div>
                <label 
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Nama
                </label>
                <input
                value={input.name}
                onChange={handleInputRegister}
                type={'text'}
                name="name"  
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                placeholder="nama" required />
                </div>
                <div>
                <label 
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Image
                </label>
                <input
                value={input.image_url}
                onChange={handleInputRegister}
                type={'text'} 
                name="image_url"  
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                placeholder="image" required />
                </div>
                <div>
                <label 
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Email
                </label>
                <input 
                value={input.email}
                onChange={handleInputRegister}
                type={'text'} 
                name="email"  
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                placeholder="name@company.com" required />
                </div>
                <div>
                <label 
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Password
                </label>
                <input 
                value={input.password}
                onChange={handleInputRegister}
                type={'password'} 
                name="password" 
                id="password" 
                min={'8'}
                placeholder="••••••••" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                </div>
                <button 
                type={'submit'} 
                className="w-full text-white bg-teal-400 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">
                    Register
                </button>
            </form>
        </div>
        </>
    )
}

export default Register