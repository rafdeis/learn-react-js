import React from "react";
import './tugas9.css';
import { useState } from "react";

const Tugas9 = () => {

    const [count, setCount] = useState(0);


    return (
        <div className='card'>
            <div className="p1">
                <p>{count}</p>
            </div>
            <button onClick={() => setCount(count + 1)}>
            Tambah
            </button>
            <div className="p2">
                {count > 10 ? "State count sudah lebih dari 10": ""}
            </div>
        </div>

    )
}

export default Tugas9