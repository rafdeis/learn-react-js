import React, { useEffect, useState } from "react";
import axios from "axios";

const Tugas12 = () => {

    const [data, setData] = useState(null)
    const [input, setInput] = useState(
        {
            name : "",
            course : "",
            score : ''
        }
    )
    const [fetchStatus, setFetchStatus] = useState(true)

    useEffect(() => {

        if (fetchStatus ===  true ){
        axios.get('https://backendexample.sanbercloud.com/api/student-scores')
        .then((res) => {
            setData(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
        setFetchStatus(false)
    }
    }, [fetchStatus, setFetchStatus])


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

        axios.post('https://backendexample.sanbercloud.com/api/student-scores', {name, course, score})
        .then((res) => {
            console.log(res)
            setFetchStatus(true)
        })
        setInput(
            {
                name : "",
                course : "",
                score : ''
            }
          )

    }

    return (
        <>
        <div className="w-1/2 mx-auto mt-10">
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs bg-purple-500 text-white">
            <tr>
              <th scope="col" className="py-3 px-6">
                NO
              </th>
              <th scope="col" className="py-3 px-6">
                NAMA
              </th>
              <th scope="col" className="py-3 px-6">
                MATA KULIAH
              </th>
              <th scope="col" className="py-3 px-6">
                NILAI
              </th>
              <th scope="col" className="py-3 px-6">
                INDEX NILAI
              </th>
            </tr>
          </thead>
          <tbody>
          { data !== null && data.map((res, index) => { 
            return (
                    <tr key={res.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">             
                        <td className="py-4 px-6">
                            {index + 1}
                        </td>
                        <td className="py-4 px-6">
                            {res.name}
                        </td>
                        <td className="py-4 px-6">
                            {res.course}
                        </td>
                        <td className="py-4 px-6">
                            {res.score}
                        </td>
                        <td className="py-4 px-6">
                            {handleIndexScore(res.score)}
                        </td>
                    </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
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


export default Tugas12