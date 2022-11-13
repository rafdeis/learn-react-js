import axios from "axios";
import Cookies from "js-cookie";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext()

export const AuthProvider = (props) => {

    let navigate = useNavigate()
    const [fetchStatus,setFetchStatus] = useState(true)

    const [dataUser, setDataUser] = useState(JSON.parse(Cookies.get('user')?? null))
    console.log(dataUser)
    const [ input,setInput ] = useState(
        {
            name : "",
            image_url : "",
            email : "",
            password : "",

            current_password : "",
            new_password : "",
            new_confirm_password : ""
        }
    ) 
    const handleInputRegister = (event) => {
        let value = event.target.value
        let name = event.target.name

        setInput({...input, [name] : value})
    }
    const handleRegister = (event) => {
        event.preventDefault()

        let { name, image_url, email, password } = input

        axios.post(`https://dev-example.sanbercloud.com/api/register`, {name, image_url, email, password})
        .then((res) => {
            let data = res.data
            // Cookies.set(`token`, data.token, {expires : 1})
            navigate('/login')
        })
        .catch((err) => {
            alert(err.message)
            console(err)
        })
    }
    const handleInputLogin = (event) => {
        let value = event.target.value
        let name = event.target.name

        setInput({...input, [name] : value})
    }

    const handleLogin = (event) => {
        event.preventDefault()

        let {email,password} = input 

        axios.post(`https://dev-example.sanbercloud.com/api/login` ,{email,password})
        .then((res) => {
            const{token,user} = res.data
            Cookies.set(`token`, token, {expires : 1})
            Cookies.set(`user`, JSON.stringify(user), {expires : 1})
            navigate('/dashboard')
        })
        .catch((err) => {
            alert(err.message)
        })
    }

    const handleInputChangePassword = (event) => {
        let value = event.target.value
        let name = event.target.name

        setInput({...input, [name] : value})
    }

    const handleChangePassword = (event) => {
        event.preventDefault()

        axios.post(`https://dev-example.sanbercloud.com/api/change-password`, {
            current_password : input.current_password,
            new_password : input.new_password,
            new_confirm_password : input.new_confirm_password
        }, {headers: {"Authorization" : "Bearer"+ Cookies.get('token')}
        })
        .then((res) => {
            console.log(res)
            setFetchStatus(true)
            navigate('/dashboard/profile')
        })
        setInput(
            {
            current_password : "",
            new_password : "",
            new_confirm_password : ""
            }
        )
    }
    

    const handleLogout = () => {
        Cookies.remove('token')
        Cookies.remove('user')
        navigate('/')
    }
    
    let state = {
        input,setInput,
        dataUser, setDataUser
    }
    let handleFunction = {
        handleInputRegister,
        handleRegister,
        handleInputLogin,
        handleLogin,
        handleLogout,
        handleChangePassword,
        handleInputChangePassword

    }
    return(
        <AuthContext.Provider value = {
            {
                state,
                handleFunction
            }
        }>
            {props.children}
        </AuthContext.Provider>
    )
}