import { createContext,useState } from "react";
import axios from "axios";


export const GlobalContext = createContext()

export const GlobalProvider = (props) => {
    const [data, setData] = useState(null)
    const [input, setInput] = useState(
        {
            name : "",
            course : "",
            score : ''
        }
    )
    const [fetchStatus, setFetchStatus] = useState(true)
    const [currentId, setCurrentId] = useState(-1)

    
    const handleIndexScore = (nilai) => {
        if(nilai >= 80){
            return "A"
        } else if (nilai >= 70 && nilai < 80){
            return "B"
        } else if (nilai >= 60 && nilai < 70){
            return "C"
        } else if (nilai >= 50 && nilai < 60){
            return "D"
        } else { 
            return "E"
        }
    }

    const handleInput = (event) => {

        let name = event.target.name
        let value = event.target.value

        setInput( {...input, [name] : value})

    }

    const handleSubmit = (event) => {

        event.preventDefault()
        
        let {name, course, score} = input

        if(currentId === -1) {
            axios.post('https://backendexample.sanbercloud.com/api/student-scores', {name, course, score})
            .then((res) => {
                console.log(res)
                setFetchStatus(true)
            })
        } else {

            axios.put(`https://backendexample.sanbercloud.com/api/student-scores/${currentId}`, {name, course, score})
            .then((res) => {
                setFetchStatus(true)
            })
        }
        setCurrentId(-1)

        setInput(
            {
                name : "",
                course : "",
                score : ''
            }
          )

    }

    const handleDelete = (event) => {
        let idData = parseInt(event.target.value)

        axios.delete(`https://backendexample.sanbercloud.com/api/student-scores/${idData}`)
        .then((res) => {
            setFetchStatus(true)
        })
    }

    const handleEdit = (event) => {
        let idData = parseInt(event.target.value)

        setCurrentId(idData)

        axios.get(`https://backendexample.sanbercloud.com/api/student-scores/${idData}`)
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

    let fetchData = () => {
        axios.get('https://backendexample.sanbercloud.com/api/student-scores')
        .then((res) => {
            setData(res.data)
        })
        .catch((err) => {
            console.log(err)
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
        handleIndexScore,
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