import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FilterSearch from "../../components/filterSearch";
import { DashboardContext } from "../../context/dashboardContext";

const Lowongan = () => {

    const {state,handleFunction} = useContext(DashboardContext)

    const {
        data,setData,
        fetchstatus, setFetchStatus,
    } = state
    const {
        handleTextLowongan,
        convertToRupiah,
        handleStatus,
        handleText,

    } = handleFunction



    useEffect (( ) => {
        axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy`)
        .then((res) => {
            setData(res.data.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [] )
    console.log(data)

    

return(
    <>
    
        <FilterSearch/>

                <div  className="flex flex-wrap gap-5 justify-start items-start my-10">
                    { data !== null && data.map((res) => { 
                        return (
                        <Link to={`/lowongan/${res.id}`} key={res.id} className="shadow-lg transform transition duration-500 hover:scale-90 border-2 rounded-xl w-full lg:max-w-xs p-6 bg-white dark:bg-gray-800 overflow-hidden">
                          <div className="flex flex-col md:flex-row items-center justify-between">
                            <div className="flex items-center justify-start w-full flex-grow">  
                            <div className="block-relative">                         
                                <img alt="profil" src={res.company_image_url} className="mx-auto object-cover rounded-full h-20 w-20 " />
                                </div>
                              <div className="flex flex-col items-start ml-4">
                                <span className="dark:text-white text-gray-700">
                                  {res.company_name}
                                </span>
                                <span className="text-gray-400 font-light text-sm dark:text-gray-300">
                                  {res.company_city}
                                </span>
                              </div>
                            </div>
                            <div className="flex-none hidden md:block ">
                            <span className="w-full px-2 py-1 text-sm rounded-full text-white bg-teal-300">
                                {handleStatus(res.job_status)}
                            </span>
                            </div>
                          </div>
                          <p className="text-gray-800 dark:text-white text-lg mt-4 mb-2">
                            {res.title}
                          </p>
                          <p className="text-gray-400 font-normal text-sm">
                            {handleText(res.job_description ,100)}
                          </p>
                            <div className="flex mx-auto mt-4 ">
                              <span className="px-3 mx-auto py-1 flex-none text-sm rounded-full text-teal-400 border border-teal-500">
                                {res.job_tenure}
                              </span>
                              <span className="px-3 mx-auto py-1 flex-none text-sm rounded-full text-teal-400 border border-teal-500">
                                {res.job_type}
                              </span>
                            </div>
                          <div className="flex items-center rounded justify-between p-2 bg-teal-100 my-4">
                            <div className="flex items-start w-full justify-between">
                              <p className="flex-grow w-full text-xl text-gray-700">  
                              <span class="text-gray-400 font-light text-md mr-2">
                                IDR 
                            </span>          
                                    {convertToRupiah(res.salary_min + "")} - {convertToRupiah(res.salary_max + "")}
                              </p>
                            </div>
                          </div>
                        </Link>
                    )
                })}
              </div>
    </>
)
}

export default Lowongan