import React from 'react'

function Green() {
    const divs=["green","green","green","green","green","green","green","White",]
    

  return (
    <div style={{display:'grid',gridTemplateColumns:"1fr 1fr"}}>
        {divs.map((item)=><div style={{backgroundColor:item,width:"125px",height:"125px",margin:10,borderWidth:"2px",borderColor:'yellow'}}></div>)}
    </div>
  )
}

export default Green