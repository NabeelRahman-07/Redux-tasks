import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Fetch() {
    const [name,setName]=useState("");
    const [age,setAge]=useState(null);
    const fetchdata = async () => {
            await axios.post("http://localhost:4000/users",{
                    name:name,
                    age:Number(age)
                
            })
            setAge("");
            setName("");
        }
    return (
        <div>
            <h2>Add User</h2>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            <input type="number" value={age} onChange={(e)=>setAge(e.target.value)} />
            <button onClick={fetchdata}>Add</button>
        </div>
    )
}

export default Fetch