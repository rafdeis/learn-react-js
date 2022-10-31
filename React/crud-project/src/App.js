import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

  const App = () => {
    const [data , setData] = useState(null)
  

  useEffect ( () => {

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

  } , [] )

  console.log(data)

  return (
    <>
      <div>
        <ul>
         
          { data !== null && data.map((res) => {
            return (
              <>
                <li>  {res.name} </li>
              </>
            )
          })}

        </ul>
        <br/>
        <br/>
        <br/>
        <table>
          <tr>
            <th>No</th>
            <th>Nama</th>
          </tr>

          {data !== null && data.map((res, index) => {
            return (
              <tr>
                <td>{ index + 1}</td>
                <td>{res.name}</td>
              </tr>
            )
          })}
        </table>
      </div>
    </>
  );

}

export default App;
  