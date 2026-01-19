import React, {useEffect, useState } from 'react'

function Training() {
    const words = [
  "apple", "banana", "cherry", "date", "elderberry",
  "fig", "grape", "honeydew", "kiwi", "lemon",
  "mango", "nectarine", "orange", "papaya", "quince",
  "raspberry", "strawberry", "tangerine", "ugli", "watermelon"
];
const [limit,setLimit]=useState(0)
const dataPerPage=3;
const items=words.slice(limit,limit+dataPerPage)

  return (
    <div>
        <div>
            <h2>Datas:</h2>
            {items.map((item)=><li>{item}</li>)}
            <button onClick={()=>setLimit(prev=>prev-dataPerPage)} disabled={limit==0}>Prev</button>
            <button onClick={()=>setLimit(prev=>prev+dataPerPage)} disabled={limit+dataPerPage>=words.length}>Next</button>
        </div>
    </div>
  )
}
export default Training