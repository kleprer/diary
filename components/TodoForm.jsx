'use client'
import React, {useState, useContext} from 'react'
import { FiPlus } from "react-icons/fi";


const TodoForm = (props) => {

    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim() !== "") {
            props.addTodo({
                id: props.todos.length + 1,
                user_id: 1,
                title: value,
                date: props.chosenDate,
                completed: false
            })
        }
        console.log(props.todos);

        setValue('');
            
    }
    
    return (
        <form className="flex gap-[5px] items-center"
        onSubmit={handleSubmit}>
            <input type="text" placeholder="" value={value}
            className="focus:outline-none text-[20px] 
            text-black p-[5px] w-full rounded-xl border-4 
            border-black" onChange={(e) => setValue(e.target.value)}
            maxlength="56">
            </input>
            <button type="submit">
                <FiPlus className="size-[40px]
                hover:text-gray-300"/> 
            </button>
        </form>
    )
}

export default TodoForm