import React from "react";
import './tugas9.css';
import { useState } from "react";

const Tugas9 = () => {

    const [count, setCount] = useState(0);


    return (
        <div className='card'>
            <p> {count} </p>
            <button onClick={() => setCount(count + 1)}>
            Tambah
            </button>
            
            {count > 10 ? "State count sudah lebih dari 10": ""}
        </div>

    )
}

export default Tugas9