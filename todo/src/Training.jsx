import React, { useState } from 'react'

function Training() {
  const skills = [
    { id: 1, text: "HTML" },
    { id: 2, text: "CSS" },
    { id: 3, text: "JAvaScript" },
    { id: 4, text: "React" },
    { id: 5, text: "Redux" }
  ]
  const [items, setItems] = useState([]);

  const handleChange = (id, checked) => {
    setItems(prev => {
      if (checked) {
        if (prev.some(item => item.id == id)) return prev;
        const newSkill = skills.find(item => item.id == id)
        return newSkill ? [...prev, newSkill] : prev;
      } else {
        return items.filter(item => item.id !== id)
      }
    })
  }

  return (
    <div>
      <div>
        <h2>Select Skills:</h2>
        {skills.map(skill => <li key={skill.id}><label><input type="checkbox" checked={items.some(item => item.id == skill.id)} onChange={e => handleChange(skill.id, e.target.checked)} />{skill.text}</label></li>)}
      </div>
      <div>
        <h2>Your skills:</h2>
        <ul>
          {items.map(item => <li key={item.id}>{item.text}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default Training