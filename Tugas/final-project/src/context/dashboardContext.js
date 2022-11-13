import axios from "axios";
import Cookies from "js-cookie";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


export const DashboardContext = createContext()

export const DashboardProvider = (props) =>{

    let navigate = useNavigate()

    const [ data,setData ] = useState(null)
    const [ fetchStatus, setFetchStatus ] = useState(true)
    const [ currentId, setCurrentId ] = useState(-1)
    const [ display,setDisplay ] = useState(false)
    const [ search,setSearch ] = useState("")
    const [ dataJob,setDataJob ] = useState(null) 
 
    const [ filter,setFilter ] = useState({
        company_city : "",
        job_tenure : " ",
        job_type : ""
    })

    const [input, setInput] = useState(
        {
            title : "",
            job_description : "",
            job_qualification : "",
            job_type : "",
            job_tenure : "",
            job_status : '',
            company_name : "",
            company_image_url : "",
            company_city : "",
            salary_min : '',
            salary_max : ''
        }
    )

    const handleInput = (event) => {

        let name = event.target.name
        let value = event.target.value

        setInput( {...input, [name] : value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (currentId === -1) {
            axios.post(`https://dev-example.sanbercloud.com/api/job-vacancy`, {
            title : input.title,
            job_description : input.job_description,
            job_qualification : input.job_qualification,
            job_type : input.job_type,
            job_tenure : input.job_tenure,
            job_status : input.job_status,
            company_name : input.company_name,
            company_image_url : input.company_image_url,
            company_city : input.company_city,
            salary_min : input.salary_min,
            salary_max : input.salary_max},
            {headers: {"Authorization" : "Bearer"+ Cookies.get('token')}}
            )
        .then((res) => {
            console.log(res)
            setFetchStatus(true)
            navigate('/dashboard/list-job-vacancy')
        })
        } else {
            axios.put(`https://dev-example.sanbercloud.com/api/job-vacancy/${currentId}`, {
                title : input.title,
                job_description : input.job_description,
                job_qualification : input.job_qualification,
                job_type : input.job_type,
                job_tenure : input.job_tenure,
                job_status : input.job_status,
                company_name : input.company_name,
                company_image_url : input.company_image_url,
                company_city : input.company_city,
                salary_min : input.salary_min,
                salary_max : input.salary_max},
                {headers: {"Authorization" : "Bearer"+ Cookies.get('token')}
            })
            .then((res) => {
                setFetchStatus(true)
                navigate('/dashboard/list-job-vacancy')
            })
        }

        setCurrentId(-1)

        setInput ({
            title : "",
            job_description : "",
            job_qualification : "",
            job_type : "",
            job_tenure : "",
            job_status : '',
            company_name : "",
            company_image_url : "",
            company_city : "",
            salary_min : '',
            salary_max : ''
        })
    }

    const handleDelete = (event) => {
        let ID_GAMES = parseInt(event.currentTarget.value)

        axios.delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${ID_GAMES}`,{headers: {"Authorization" : "Bearer"+ Cookies.get('token')}})
        .then((res) => {
            setFetchStatus(true)
        })
    }

    const handleEdit = (event) =>{
        let ID_GAMES = parseInt(event.currentTarget.value)

        setCurrentId(ID_GAMES)
        navigate(`/dashboard/list-job-vacancy/edit/${ID_GAMES}`)
    }

    const handleChangeSearch = (event) => setSearch(event.target.value)

    const handleSearch = (event) => {
        event.preventDefault()
        
        let fetchData = async () => {
            setData(null)
            setDisplay(true)
            let {data} = await axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy`)
            let dataJob = data.data
    
            let searchData = dataJob.filter((res) =>{
                return Object.values(res).join(" ").toLocaleLowerCase().includes(search.toLowerCase())
            })
    
            console.log(searchData)
    
            setDisplay(false)
            setData([...searchData])
        }

        fetchData()
        setSearch(" ")
    }

    const handleChangeFilter = (event) => {
        setFilter({...filter,[event.target.name] : event.target.value})
    }    

    const handleFilter = (event) => {
        event.preventDefault()
        console.log(filter)


        console.log(search)

        let fetchData = async () => {
            setData(null)
            setDisplay(true)
            let {data} = await axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy`)
            let dataJob = data.data
    
            console.log(dataJob)

            let filterData = dataJob.filter((res) =>{
                return res.job_tenure === filter.job_tenure && res.job_type === res.job_type && res.company_city === res.company_city
            })
    
            console.log(filterData)
    
            setDisplay(false)
            setData([...filterData])
        }

        fetchData()
        setSearch(" ")
    }



    function handleText(str,max) {
        if (str === null) {
          return ""
        } else {
        return str.slice(0, max) + '...'
        }
      }

      function handleTextLowongan(str) {
        if (str === null) {
            return ""
          } else {
          return str.slice(0, 100) + '...'
          }
        }

        function convertToRupiah(angka, prefix){
			var number_string = angka.replace(/[^,\d]/g, '').toString(),
			split   		= number_string.split(','),
			sisa     		= split[0].length % 3,
			rupiah     		= split[0].substr(0, sisa),
			ribuan     		= split[0].substr(sisa).match(/\d{3}/gi);
 
			// tambahkan titik jika yang di input sudah menjadi angka ribuan
			if(ribuan){
				let separator = sisa ? '.' : '';
				rupiah += separator + ribuan.join('.');
			}
 
			rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
			return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
		}
        const handleStatus = (type) => {
            if(type == 1) {
                return "Dibuka"
            } else  {
                return "Ditutup"
            } 
        }



    let state = {
        data,setData,
        fetchStatus, setFetchStatus,
        input, setInput,
        currentId, setCurrentId,
        display,setDisplay,
        search,setSearch,
        filter,setFilter,
        dataJob,setDataJob

    }
    let handleFunction = {
        handleText,
        handleTextLowongan,
        convertToRupiah,
        handleInput,
        handleSubmit,
        handleDelete,
        handleEdit,
        handleStatus,
        handleChangeSearch,
        handleSearch,
        handleChangeFilter,
        handleFilter

    }

    return(
        <DashboardContext.Provider value={
            {
                state,
                handleFunction
            }
        }>
            {props.children}
        </DashboardContext.Provider>
    )
}