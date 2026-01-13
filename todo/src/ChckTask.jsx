import React,{useState} from 'react'

function CheckBox() {
    // const list=[{id:1,value:"DSA"},
    //     {id:2,value:"JAVA"},
    //     {id:3,value:"REACT"},
    //     {id:4,value:"C++"},
    //     {id:5,value:"GATE"}
    // ]
    // const [selected,setSelected]=useState(false);
    // const [selectedItems,setSelectedItems]=useState([])


    // const handleSelect=()=>{
    //     setSelected(prev=>!prev)
    // }

    // const handleSelectedItem=(id,checked)=>{
    //     setSelectedItems(prev=>{
    //         if(checked){
    //                 if(prev.some(item=>item.id===id)) return prev
    //                 const toSelect=list.find(item=>item.id===id)
    //                 return toSelect?[...prev,toSelect]:prev
    //         }else{
    //             return prev.filter(item=>item.id !==id)
    //         }
    //     }
    //     )
    // }





    const list=[
        {id:1,text:"HTML"},
        {id:2,text:"CSS"},
        {id:3,text:"Javascript"},
        {id:4,text:"React"},
        {id:5,text:"Redux"}
    ];
    const [skills,setSkills]=useState([]);

    const handleCheck=(id,checked)=>{
        setSkills(state=>{
            if(checked){
                if(state.some(item=>item.id==id))return state;
                const newSkill=list.find((item)=>item.id==id)
                return newSkill?[...state,newSkill]:state;
            }else{
                return state.filter((skill)=>skill.id!==id)
            }
        })
    }

  return( 
    <div>
        <h2>Select skills</h2>
    <ul>
        {list.map((skill)=>(<li key={skill.id}><input type="checkbox"
          checked={skills.some((li)=>li.id==skill.id)}
          onChange={(e)=>handleCheck(skill.id,e.target.checked)} />{skill.text}</li>))}
    </ul>
    <div>
        <h2>Skills</h2>
        <ul>
            {skills.map(skill=>(<li>{skill.text}</li>))}
        </ul>
    </div>
    </div>
    
  )
}

export default CheckBox