import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { GlobalContext } from '../context/GlobalContext';
import { Link } from "react-router-dom";

const Tugas15List = () => {

    const { state, handleFunction } = useContext(GlobalContext)
    const {
        data , setData,
        input, setInput,
        fetchStatus, setFetchStatus,
        currentId, setCurrentId
    } = state

    const{
        handleIndexScore,
        handleInput,
        handleSubmit,
        handleDelete,
        handleEdit,
        fetchData

    } = handleFunction

    useEffect(() => {

        if (fetchStatus ===  true ){
            fetchData()
    }
    }, [fetchStatus, setFetchStatus])

    return (
        <>
        <div className="w-1/2 mx-auto mt-10">
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <Link to={'/create'}>
            <button 
            type="button" 
            className="focus:outline-none text-white bg-purple-500 hover:bg-purple-600 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
            Create Data
            </button>
            </Link>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs bg-purple-500 text-white">
            <tr>
              <th scope="col" className="py-3 px-6">
                NO
              </th>
              <th scope="col" className="py-3 px-6">
                NAMA
              </th>
              <th scope="col" className="py-3 px-6">
                MATA KULIAH
              </th>
              <th scope="col" className="py-3 px-6">
                NILAI
              </th>
              <th scope="col" className="py-3 px-6">
                INDEX NILAI
              </th>
              <th scope="col" className="py-3 px-6">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
          { data !== null && data.map((res, index) => { 
            return (
                    <tr key={res.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">             
                        <td className="py-4 px-6">
                            {index + 1}
                        </td>
                        <td className="py-4 px-6">
                            {res.name}
                        </td>
                        <td className="py-4 px-6">
                            {res.course}
                        </td>
                        <td className="py-4 px-6">
                            {res.score}
                        </td>
                        <td className="py-4 px-6">
                            {handleIndexScore(res.score)}
                        </td>
                        <td className="flex flex-nowrap py-4 px-6">                                                  
                            <button 
                            onClick={handleEdit}
                            value={res.id}
                            type="button" 
                            className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Edit</button> 
                            <button 
                            onClick={handleDelete}
                            value={res.id}
                            type="button" 
                            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>  
                        </td>
                    </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </div>
    </>
    )
}


export default Tugas15List