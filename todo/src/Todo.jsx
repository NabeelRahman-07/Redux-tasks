import React, { useState } from 'react'

function Todo() {
    const [task, setTask] = useState("");
    const [items, setItem] = useState([]);
    const [deleted, setDeleted] = useState([]);
    const [id, setId] = useState(null);
    const [count, setCount] = useState(0);
    const [search, setSearch] = useState("");
    const [searched, setSearched] = useState([]);

    const handleSubmit = () => {
        if (id) {
            setItem(items.map((todo) => (todo.id == id ? { ...todo, text: task } : todo)))
            setTask("");
            setId(null);
            return
        }
        if (!task.trim()) return;
        setItem([...items, { id: Date.now(), text: task, color: "black" }])
        setTask("");
    }


    const handleDelete = (item) => {
        setItem(items.filter((todo) => todo.id !== item.id))
        setDeleted([...deleted, item])
    }


    const handleUndo = (item) => {
        setDeleted(deleted.filter((todo) => todo.text !== item.text))
        setItem([...items, { ...item, color: "red" }])
    }

    const handleEdit = (item) => {
        setTask(item.text);
        setId(item.id);
    }
    const handleSearch = () => {
        if (!search) {
            setSearched([])
            return
        }
        setSearched(items.filter((item) => item.text.trim().toLowerCase().includes(search.trim().toLowerCase())))
    }


    return (
        <div>
            <h1>Basic todo</h1>
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
            <button onClick={handleSubmit}>Submit</button>
            <div>
                <h3>Tasks:</h3>
                <ul>
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} /><button onClick={handleSearch}>Search</button>
                    {(searched.length > 0 ? searched : items).map((item, index) => (<li key={index} style={{ color: item.color }}>{item.text}<button onClick={() => handleEdit(item)}>Edit</button><button onClick={() => handleDelete(item)}>Delete</button></li>))}
                    {/* {items.map((item, index) => (<li key={index} style={{ color: item.color }}>{item.text}<button onClick={() => handleEdit(item)}>Edit</button><button onClick={() => handleDelete(item)}>Delete</button></li>))} */}
                </ul>
            </div>

            <div>
                <h3>Deleted tasks:<button onClick={() => (count ? setCount(0) : setCount(1))}>Show</button></h3>
                {count ? <ul>
                    {deleted.map((item, index) => (<li key={index}>{item.text}<button onClick={() => handleUndo(item)}>Undo</button></li>))}
                </ul> : null}
            </div>

        </div>
    )
}

export default Todo