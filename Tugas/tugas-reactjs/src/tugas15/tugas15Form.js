import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { GlobalContext } from '../context/GlobalContext';
import { useParams } from "react-router-dom";

const Tugas15Form = () => {
    let { IdData } = useParams()

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
        if(IdData !== undefined) {
        axios.get(`https://backendexample.sanbercloud.com/api/student-scores/${IdData}`)
        .then((res) => {
            let data = res.data
            console.log(data)
        setInput(
            {
                name : data.name,
                course : data.course,
                score : data.score
            }
        )
        })            
        }
    }, [])

    return (
        <>
        <div className="w-1/2 mx-auto mt-10">
        <form onSubmit={handleSubmit} className="mt-10 mb-10">
            <div className="mb-6">
                <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Nama :
                </label>
                <input
                onChange={handleInput}
                value={input.name}
                name="name"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Nama..." required/>
            </div>
            <div className="mb-6">
                <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Mata Kuliah :
                </label>
                <input
                onChange={handleInput}
                value={input.course}
                name="course"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Mata Kuliah..." required/>
            </div>
            <div className="mb-6">
                <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Nilai :
                </label>
                <input
                onChange={handleInput}
                value={input.score}
                name="score"
                type="number"
                min="0"
                max="100"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="0" required/>
            </div>
            <input
                type={'submit'}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"/>
        </form>
    </div>
    </>
    )
}


export default Tugas15Form