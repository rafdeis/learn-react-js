import { createContext, useState } from "react";

import axios from "axios";

export const GlobalContext = createContext()

export const GlobalProvider = (props) => {

    const [data, setData] = useState(null)
    const [input, setInput] = useState(
        {
            image_url : "",
            name : "",
            category : "",
            description : "",
            price : '',
            rating : '',
            release_year : '',
            size : '',
            is_android_app : '',
            is_ios_app : ''
        }
    )
    const [fetchStatus, setFetchStatus] = useState(true)
    const [currentId, setCurrentId] = useState(-1)


    const handleIndexName = (string, length, end = "...") => {
        return string.length < length ? string : string.substring(0, length) + end
    }
    

    const handleInput = (event) => {

        let name = event.target.name
        let value = event.target.value

        setInput( {...input, [name] : value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        let {
            image_url,
            name,
            category,
            description,
            price,
            rating,
            release_year,
            size,
            is_android_app,
            is_ios_app
        } = input

        if (currentId === -1) {
            axios.post('https://backendexample.sanbercloud.com/api/mobile-apps', 
            {image_url,
            name,
            category,
            description,
            price,
            rating,
            release_year,
            size,
            is_android_app,
            is_ios_app})
            .then((res) => {
                console.log(res)
                setFetchStatus(true)
            })
        }else {
            axios.put(`https://backendexample.sanbercloud.com/api/mobile-apps/${currentId}`, {
            image_url,
            name,
            category,
            description,
            price,
            rating,
            release_year,
            size,
            is_android_app,
            is_ios_app})
            .then((res) => {
                setFetchStatus(true)
            })
        }
        setCurrentId(-1)

            setInput(
                {
                    image_url : "",
                    name : "",
                    category : "",
                    description : "",
                    price : '',
                    rating : '',
                    release_year : 2007,
                    size : '',
                    is_android_app : '',
                    is_ios_app : ''
                }
              )
    }

    const handleDelete = (event) => {
        let ID_MOBILE_APPS= parseInt(event.currentTarget.value)

        axios.delete(`https://backendexample.sanbercloud.com/api/mobile-apps/${ID_MOBILE_APPS}`)
        .then((res) => {
            setFetchStatus(true)
        })
    }

    const handleEdit = (event) => {
        let ID_MOBILE_APPS = parseInt(event.currentTarget.value)
        setCurrentId(ID_MOBILE_APPS)

        axios.get(`https://backendexample.sanbercloud.com/api/mobile-apps/${ID_MOBILE_APPS}`)
        .then((res) => {
            let data = res.data

            setInput(
                {
                    image_url : data.image_url,
                    name : data.name,
                    category : data.category,
                    description : data.description,
                    price : data.price,
                    rating : data.rating,
                    release_year : data.release_year,
                    size : data.size,
                    is_android_app : data.is_android_app,
                    is_ios_app : data.is_ios_app
                }
            )
        })
    }

    const handleAndroid = (type) => {
        if(type = 1) {
            return "Android"
        } else if (type = 0) {
            return null
        } else {
            return null
        }
    }
    const handleIos = (type) => {
        if(type == 1) {
            return "IOS"
        } else if (type = 0) {
            return null
        } else {
            return null
        }
    }


    let fetchData = () => {
        axios.get('https://backendexample.sanbercloud.com/api/mobile-apps')
        .then((res) => {
            setData(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
        setFetchStatus(false)
    }
    // const handleHarga = (harga) => {
    //     if (harga = 0){
    //         return "Free"
    //     }
    // }

    function formatBytes(MB, decimals = 2) {
        if (!+MB) return '0 MB'
    
        const k = 1024
        const dm = decimals < 0 ? 0 : decimals
        const sizes = ['MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    
        const i = Math.floor(Math.log(MB) / Math.log(k))
    
        return `${parseFloat((MB / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
    }

    function convertToRupiah(angka){
	    var rupiah = '';		
	    var angkarev = angka.toString().split('').reverse().join('');
	    for(var i = 0; i < angkarev.length; i++) if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.';
	        return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('');
    }
    function handleText(str, num) {
        if (str.length <= num) {
          return str
        }
        return str.slice(0, num) + '...'
      }


    let state = {
        data, setData,
        input, setInput,
        fetchStatus, setFetchStatus,
        currentId, setCurrentId

    }

    let handleFunction = {
        handleInput,
        handleIndexName,
        handleSubmit,
        handleDelete,
        handleEdit,
        fetchData,
        handleAndroid,
        handleIos,
        formatBytes,
        // handleHarga,
        convertToRupiah,
        handleText,
    }

    return(
        <GlobalContext.Provider value={
            {
                state,
                handleFunction,
            }
        }>
            {props.children}
        </GlobalContext.Provider>
    )
}