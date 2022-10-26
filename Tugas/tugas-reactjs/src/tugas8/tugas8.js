import React from "react";
import './tugas8.css';

const Tugas8 = (props) => {
    console.log(props.name,props.batch,props.email)
    return ( 
        <>
         <div className='card'>
            <h1> Data diri peserta kelas ReactJS</h1>
            <hr/>
            <div>
            <li><strong>Nama Lengkap : </strong>{props.name}</li>
            <li><strong>Email : </strong>{props.email}</li>
            <li><strong>Batch Pelatihan: </strong>{props.batch}</li>
            </div>      
           </div>
           </>
    );
  }

export default Tugas8