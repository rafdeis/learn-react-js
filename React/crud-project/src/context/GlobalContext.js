import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const GlobalContext = createContext()

export const GlobalProvider = (props) => {

    let navigate = useNavigate()

    const [data , setData] = useState(null)
    const [input, setInput] = useState(
      {
        name : ""
      }
    )
    const [fetchStatus, setFetchStatus] = useState(true) 
    const [currentId, setCurrentId] = useState(-1) 

    const handleInput = (event) => {

        let name = event.target.name
        let value = event.target.value
  
        if(name === "name"){
          setInput( { ...input, name : value} )
       }
    }
       const handleSubmit = (event) => {
        event.preventDefault()
        let {
          name
        } = input
    
  
        if(currentId === -1){
          axios.post('https://backendexample.sanbercloud.com/api/contestants', {name})
        .then((res) => {
          console.log(res)
          setFetchStatus(true)
          navigate('/code-materi')
        })
       }else{
        //update data
        axios.put(`https://backendexample.sanbercloud.com/api/contestants/${currentId}`, {name})
        .then((res)=> {
          setFetchStatus(true)
          navigate('/code-materi')
        })
       }
       setCurrentId(-1)
        setInput(
          {
            name : ""
          }
        )
      }
      
      const handleDelete = (event) => {
        let idData = parseInt(event.target.value)
        // console.log(idData)
    
        axios.delete(`https://backendexample.sanbercloud.com/api/contestants/${idData}`)
        .then( (res) => {
          setFetchStatus(true)
        })
      }
    
      const handleEdit = (event) => {
        let idData = parseInt(event.target.value)
        console.log(idData)
    
        setCurrentId(idData)
        navigate(`/edit/${idData}`)
      } 

      let fetchData = () => {
        axios.get('https://backendexample.sanbercloud.com/api/contestants')
        .then( (res) => {
          let  data = res.data
          console.log(res.data)
    
          let resultData = data.map( (e) => {
    
            let {
              gender,
              height,
              id,
              name,
            }  = e
    
            return {
              gender,
              height,
              id,
              name,
            }
          })
    
          setData([...resultData])
        })
        .catch( (err) => {
    
        })
        setFetchStatus(false)
      }
      




    let state = {
        data , setData,
        input, setInput,
        fetchStatus, setFetchStatus,
        currentId, setCurrentId
    }  
    let handleFunction = {
        handleInput,
        handleSubmit,
        handleDelete,
        handleEdit,
        fetchData

    }
    

    return(
        <GlobalContext.Provider value={
            {
                state,
                handleFunction
            }
        }>


            {props.children}
        </GlobalContext.Provider>
    )
}