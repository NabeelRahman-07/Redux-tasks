import React, { useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { addTodo, deleteTodo, editTodo } from './TodoSlice';


function Todo() {
    const dispatch=useDispatch();
    const items=useSelector((state)=>state.todo.items)

    const [text,setText]=useState("");
    const [editId,setEditId]=useState(null);

    const addOrEdit=()=>{
        if(!text.trim())return;
        if(editId !==null){
            dispatch(editTodo({id:editId,text:text}))
            setEditId(null);
        }else{
            dispatch(addTodo(text))
        }
        setText("");
    }
  return (
    <div>
        <h1>Todo app</h1>
        <input type="text" value={text} onChange={(e)=>setText(e.currentTarget.value)} />
        <button onClick={addOrEdit}>{editId?"Update":"Add"}</button>
        <ul>
            {items.map((item,index)=>(<li key={index}>{item.text}
                <button onClick={()=>{setEditId(item.id);setText(item.text)}}>Edit</button>
                <button onClick={()=>dispatch(deleteTodo(item.id))}>Delete</button>
            </li>))}
        </ul>
    </div>
  )
}

export default Todo