'use client'
import React, {useState} from 'react'
import { FiPlus } from "react-icons/fi";

const TodoForm = (props) => {

    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim() !== "") {
            props.addTodo(value);
        }
        setValue('');
    }

    return (
        <form className="flex gap-[5px] items-center"
        onSubmit={handleSubmit}>
            <input className="focus:outline-none text-[20px] text-black p-[5px] w-full rounded-xl border-4 border-black" 
            type="text" placeholder="" value={value} maxlength="56"  onChange={(e) => setValue(e.target.value)} />
            <button type="submit">
                <FiPlus className="size-[40px] hover:text-gray-300"/> 
            </button>
        </form>
    )
}

export default TodoForm;