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
      })
     }else{
      //update data
      axios.put(`https://backendexample.sanbercloud.com/api/contestants/${currentId}`, {name})
      .then((res)=> {
        setFetchStatus(true)
      })
     }

     setCurrentId(-1)

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

    axios.get(`https://backendexample.sanbercloud.com/api/contestants/${idData}`)
    .then( (res) => {
      

      let data = res.data
      console.log(data)

      setInput(
        {
          name : data.name
        }
      )
    })
  } 

  return (
    <>
      <div>
        <ul>
         
          { data !== null && data.map((res) => {
            return (
              <>
                <li>  {res.name} | &nbsp;
                  <button onClick={handleEdit} value={res.id}>Edit</button>
                  <button onClick={handleDelete} value={res.id}>Delete</button>
                 </li>
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
  