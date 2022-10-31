import React, { useEffect, useState } from "react";
import axios from "axios";

const Tugas11 = () => {

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

    const [data, setData] = useState(null)

    useEffect(() => {

        axios.get('https://backendexample.sanbercloud.com/api/student-scores')
        .then((res) => {
            setData(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    console.log(data)

    return (
        <>
        <div className="w-3/6 mx-auto mt-10">
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
    </div>
    </>
    )
}

export default Tugas11