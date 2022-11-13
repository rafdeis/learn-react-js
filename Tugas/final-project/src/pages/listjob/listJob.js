import React, { useContext, useEffect } from "react";
import { Table,Button } from "flowbite-react";
import { DashboardContext } from "../../context/dashboardContext";
import axios from "axios";
import FilterSearch from "../../components/filterSearch";

const ListJob = () => {

    const {state, handleFunction} = useContext(DashboardContext)

    const {
        data,setData,
        fetchStatus,setFetchStatus
    } = state
    const {
        handleText,
        handleDelete,
        handleEdit
    } = handleFunction


    useEffect (() => {

        if(fetchStatus === true) {
            axios.get('https://dev-example.sanbercloud.com/api/job-vacancy')
        .then((res) => {
            setData([...res.data.data])
        })
        .catch((error) => {
            alert(error)
            console.log(error)
        })
        setFetchStatus(false)
        }
        console.log(data)
    }, [fetchStatus, setFetchStatus] )

    return (
        <>
        <FilterSearch/>
        <div className="container flex flex-wrap justify-start items-center mx-auto mt-5">
        <Table>
        <Table.Head className="text-xs bg-teal-300 text-black">
            <Table.HeadCell>
            NO
            </Table.HeadCell>
            <Table.HeadCell>
            TITLE
            </Table.HeadCell>
            <Table.HeadCell>
            DESCRIPTION
            </Table.HeadCell>
            <Table.HeadCell>
            QALITY
            </Table.HeadCell>
            <Table.HeadCell>
            TYPE
            </Table.HeadCell>
            <Table.HeadCell>
            TENURE
            </Table.HeadCell>
            <Table.HeadCell>
            STATUS
            </Table.HeadCell>
            <Table.HeadCell>
            COMPANY
            </Table.HeadCell>
            <Table.HeadCell>
            CITY
            </Table.HeadCell>
            <Table.HeadCell>
            MIN SALARY
            </Table.HeadCell>
            <Table.HeadCell>
            MAX SALARY
            </Table.HeadCell>
            <Table.HeadCell>
            ACTION
            </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
        { data !== null && data.map((res, index) => { 
                    return(
            <Table.Row key={res.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {index + 1}
            </Table.Cell>
            <Table.Cell>
                {res.title}
            </Table.Cell>
            <Table.Cell>
                {handleText(res.job_description, 20)}
            </Table.Cell>
            <Table.Cell>
                {handleText(res.job_qualification,20)}
            </Table.Cell>
            <Table.Cell>
                {res.job_type}
            </Table.Cell>
            <Table.Cell>
                {res.job_tenure}
            </Table.Cell>
            <Table.Cell>
                {res.job_status}
            </Table.Cell>
            <Table.Cell>
                {res.company_name}
            </Table.Cell>
            <Table.Cell>
                {handleText(res.company_city,20)}
            </Table.Cell>
            <Table.Cell>
                {res.salary_min}
            </Table.Cell>
            <Table.Cell>
                {res.salary_max}
            </Table.Cell>
            <Table.Cell className="flex flex-nowrap">
            <div className="mr-2">
                    <Button
                    onClick={handleEdit}
                    value={res.id}
                    color="gray">
                    Edit
                    </Button>
                    </div>
                    <div className="ml-2">
                    <Button 
                    onClick={handleDelete}
                    value={res.id}            
                    color="failure">
                    Delete
                    </Button>
                    </div>
            </Table.Cell>
            </Table.Row>
                )
        })}
        </Table.Body>
        </Table>
        </div>
        </>
    )
}

export default ListJob