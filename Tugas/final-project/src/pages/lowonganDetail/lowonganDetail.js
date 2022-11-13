import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DashboardContext } from "../../context/dashboardContext";

const LowonganDetail = () => {

    const {state,handleFunction} = useContext(DashboardContext)

    const {
        data,setData,
        fetchstatus, setFetchStatus
    } = state
    const {
        fetchData,
        handleTextLowongan,
        convertToRupiah,
        handleStatus,
        handleText

    } = handleFunction



    const {IdData} = useParams()
    console.log(IdData)

    useEffect(() => {
        if(IdData !== undefined){
            axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${IdData}`)
            .then((res) => {
                // console.log(res.data)
                setData(res.data)
            })
        }
    },[] )

    console.log(data)


    return(
        <>
        <div className="max-y-sm my-10 lg:mx-36 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-full w-56 mx-auto mt-10 mb-10" src={data?.company_image_url} alt="" />
        <div className="p-5 my-10 mx-10 mb-5">           
            <h5 className="mb-2 text-2xl tracking-tight text-black dark:text-white">{data?.title}</h5>


            <div className="w-full text flex mx-auto items-center my-2">
            <p className="text-left">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </p>
            <p className="mx-4 text-xl font-normal">
                {data?.company_name}
            </p>
            </div>


            <p className="mb-3 font-normal text-gray-400 text-xl dark:text-gray-400">{data?.company_city}</p>


            <div className="w-full text flex items-center my-2">
            <p className="text-left">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </p>
            <p className="mx-4 text-xl font-normal">
                {data?.job_tenure}, {data?.job_type}
            </p>            
            </div>



            <div className="w-full text flex items-center my-2">
            <p className="text-left">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </p>
            <p className="mx-4 text-xl font-normal">
                {convertToRupiah(data?.salary_min + "")}    -    {convertToRupiah(data?.salary_max + "")}
            </p>            
            </div>


            <div className="flex-none hidden md:block mt-10">
            <span className="text-xl w-full px-10 py-4 text-sm rounded-xl text-white bg-teal-300">
                {handleStatus(data?.job_status)}
            </span>
            </div>
        </div>
        </div> 
        <div className="max-y-sm mb-10 lg:mx-36 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="p-10">
            <p className="mb-3 font-normal text-center text-xl dark:text-gray-400">Qualification</p>
            <p className="mb-3 font-normal text-xl text-gray-700 dark:text-gray-400">{data?.job_qualification}</p> 
            </div>
        </div>   
        <div className="max-y-sm mb-10 lg:mx-36 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="p-10">
            <p className="mb-3 font-normal text-center text-xl dark:text-gray-400">Company Description</p>
            <p className="mb-3 font-normal text-xl text-gray-700 dark:text-gray-400">{data?.job_description}</p> 
            </div>
        </div>   
        </>
    )
}

export default LowonganDetail