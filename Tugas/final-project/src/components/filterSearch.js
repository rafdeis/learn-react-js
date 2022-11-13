import React, { useContext, useState } from "react";
import axios from "axios";
import { DashboardContext } from "../context/dashboardContext";
import { Accordion } from "flowbite-react";


const FilterSearch = () => {

    const {state,handleFunction} = useContext(DashboardContext)
    const {
        data,setData,
        fetchstatus, setFetchStatus,
        display,setDisplay,
        search,setSearch,
        filter,setFilter
    } = state
    const {
        handleChangeSearch,
        handleSearch,
        handleChangeFilter,
        handleFilter
    } = handleFunction


    return(
        <>
            <div className="mt-5 flex lg:mx-96">
            <form onSubmit={handleSearch} className="flex items-center w-full">   
            <label htmlFor="simple-search" className="sr-only">Search</label>
            <div className="relative w-full">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
                </div>
                <input onChange={handleChangeSearch} value={search} type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-300 focus:border-teal-300 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
            </div>
            <button   type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-teal-300 rounded-lg border border-teal-300 hover:bg-teal-300 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-300 dark:hover:bg-teal-300 dark:focus:ring-teal-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                <span className="sr-only">Search</span>
            </button>
            </form>
            <button onClick={() => setFetchStatus(true)} type="submit" className=" p-2.5 ml-2 text-sm font-medium text-white bg-teal-300 rounded-lg border border-teal-300 hover:bg-teal-300 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-300 dark:hover:bg-teal-300 dark:focus:ring-teal-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span className="sr-only">delete</span>

            </button>
            </div>

            <div className="mt-5 lg:mx-96">
            <Accordion alwaysOpen={true}>
                <Accordion.Panel>
                    <Accordion.Title className="flex items-center justify-between w-full p-5 font-medium text-left border border-b-0 border-teal-300 rounded-t-xl focus:ring-4 focus:ring-teal-200 dark:focus:ring-teal-800 dark:border-teal-700 hover:bg-teal-100 dark:hover:bg-teal-800 bg-teal-300 dark:bg-teal-800 text-white dark:text-white">
                    Filter
                    </Accordion.Title>
                    <Accordion.Content>
                    <form onSubmit={handleFilter} className="items-center w-full">   
                        <div className="w-full">

                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">City</label>
                                <input onChange={handleChangeFilter} value={filter.job_status} type="text" name="job_status" className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-teal-300 focus:border-teal-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-300 dark:focus:border-teal-300" required />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tenure</label>
                                <input onChange={handleChangeFilter} value={filter.job_tenure} type="text" name="job_tenure" className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-teal-300 focus:border-teal-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-300 dark:focus:border-teal-300" required/>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Type</label>
                                <input onChange={handleChangeFilter} value={filter.job_type} type="text" name="job_type" className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-teal-300 focus:border-teal-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-300 dark:focus:border-teal-300" required/>
                            </div>
                        </div>
                            <button   type="submit" className="flex p-2.5 ml-2 text-sm font-medium text-white bg-teal-300 rounded-lg border border-teal-300 hover:bg-teal-300 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-300 dark:hover:bg-teal-300 dark:focus:ring-teal-300">
                                Search
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>

                            </form>
                            
                    </Accordion.Content>
                </Accordion.Panel>
                </Accordion>
            </div>
        </>
    )
}

export default FilterSearch