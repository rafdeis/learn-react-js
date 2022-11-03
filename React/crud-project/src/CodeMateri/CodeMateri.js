import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { GlobalContext } from '../context/GlobalContext';

  const CodeMateri = () => {

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

   if (fetchStatus ===  true ){
        fetchData()
   }
  } , [fetchStatus, setFetchStatus] )
  return (
    <>
      <div>
        <ul>
            { data !== null && data.map((res, index) => {
            return (
                <li key={index}>  
                    {res.name} | &nbsp;
                    <button onClick={handleEdit} value={res.id}>Edit</button>
                    <button onClick={handleDelete} value={res.id}>Delete</button>
                 </li>
            )
          })}

        </ul>
      </div>
      <p>FORM DATA</p>
      <form onSubmit={handleSubmit}>
        <span>Nama :</span> 
        <input onChange={handleInput} value={input.name} name='name' />

        <input type={'submit'}/>
      </form>

    </>
  )
}

export default CodeMateri;
  