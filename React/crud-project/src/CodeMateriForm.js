import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { GlobalContext } from './context/GlobalContext';
import { useParams } from 'react-router-dom';

  const CodeMateriForm = () => {

    let { IdData } = useParams()

    const { state, handleFunction } = useContext(GlobalContext)
    const {
        data , setData,
        input, setInput,
        fetchStatus, setFetchStatus,
        currentId, setCurrentId
    } = state

    const{
        handleInput,
        handleSubmit,
        handleDelete,
        handleEdit,
        fetchData

    } = handleFunction


  useEffect ( () => {

    if (IdData !== undefined) {
                axios.get(`https://backendexample.sanbercloud.com/api/contestants/${IdData}`)
        .then( (res) => {
          
    
          let data = res.data
    
          setInput(
            {
              name : data.name
            }
          )
        })
    }
  } , [] )
  return (
    <>
      <p>FORM DATA</p>
      <form onSubmit={handleSubmit}>
        <span>Nama :</span> 
        <input onChange={handleInput} value={input.name} name='name' />

        <input type={'submit'}/>
      </form>

    </>
  )
}

export default CodeMateriForm;
  