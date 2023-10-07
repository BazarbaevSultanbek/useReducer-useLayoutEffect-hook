import React, {useReducer, useState} from 'react';
import './tasks.scss'
import TasksReducer from "./TasksReducer.jsx";
function Tasks() {
    const [tasks,dispatch] = useReducer(TasksReducer,[
        {
            task:"Task",
            id:Math.floor(Math.random()*1000000)
        }
    ])
    const [text,setText] = useState("")

    const AddTask = ()=>{
            dispatch({type:"add",text:text})
            setText("")
    }
    const deleteTask = (id)=>{
        dispatch({type:"delete",id:id})
    }
    return (
        <div className="Tasks">
        <div className="Tasks-nav">
            <input type="text" onChange={(event)=>{setText(event.target.value)}} value={text}/>
            <button onClick={AddTask}>Add</button>
        </div>
            <div className="Tasks-items">
                <ul>{
                    tasks.map((item)=>(
                    <li id={item.id}>
                        <span>{item.task}</span>
                        <button onClick={()=>{deleteTask(item.id)}}>Remove</button>
                    </li>

                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Tasks;