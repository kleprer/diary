'use client'
import React, {useState} from 'react'
import { FiPlus } from "react-icons/fi";
const AddTodo = () => {

    const [newTask, setNewTask] = useState("");
    function handleInputChange(e) {
        setNewTask(e.target.value);
    }
    
    function addTask(e) {
        
    }
    
    return (
        <div className="flex gap-[5px] items-center">
            <input type="text" value={newTask} className='focus:outline-none text-[20px] 
            text-black p-[5px]
            w-full rounded-xl border-4 border-black'
            onChange={handleInputChange}></input>
            <FiPlus className="size-[40px]
            hover:hover:text-gray-300"
            onClick={addTask}/>
        </div>
  )
}

export default AddTodo