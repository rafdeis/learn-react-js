import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

  const App = () => {
    const [data , setData] = useState(null)


    //materi create data &  handle input
    const [input, setInput] = useState(
      {
        name : ""
      }
    )
  
     const [fetchStatus, setFetchStatus] = useState(true) 
      
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

      axios.post('https://backendexample.sanbercloud.com/api/contestants', {name})
      .then((res) => {
        console.log(res)
        setFetchStatus(true)
      })

      setInput(
        {
          name : ""
        }
      )

    }

  useEffect ( () => {

   if (fetchStatus ===  true ){
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

  } , [fetchStatus, setFetchStatus] )

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

        {/* <table>
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
        </table> */}
      </div>
      <p>FORM DATA</p>

      <form onSubmit={handleSubmit}>
        <span>Nama :</span>
        <input onChange={handleInput} value={input.name} name='name' />

        <input type={'submit'}/>
      </form>

    </>
  );

}

export default App;
  