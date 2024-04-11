'use client'
import React, {useState} from 'react'
import { FiPlus } from "react-icons/fi";

const AddTodo = (props) => {

    // const [value, setValue] = useState("");
    
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (value.trim() !== "") {
    //         props.addTodo(value);
    //     }
    //     setValue("");
    // }
    const [value, setValue] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        props.createTodo(value);
        setValue('');
        console.log()
    }
    return (
        <>
        {/* <form className="flex gap-[5px] items-center" onSubmit={handleSubmit}>
            <input value={value} type="text" placeholder=""
            className='focus:outline-none text-[20px] 
            text-black p-[5px] w-full rounded-xl border-4 border-black'
            onChange={(e) => setValue(e.target.value)}/>
            <button type="submit">
                <FiPlus className="size-[40px]
                hover:text-gray-300"
                /> 
            </button>
        </form> */}

        {/* <form className="flex gap-[5px] items-center" onSubmit={handleSubmit}>
            <input type="text" placeholder="" value={value}
            className='focus:outline-none text-[20px] 
            text-black p-[5px] w-full rounded-xl border-4 border-black' 
            onChange={(e) => setValue(e.target.value)}/>
            <button type="submit">
                <FiPlus className="size-[40px]
                hover:text-gray-300"
                /> 
            </button>
        </form> */}
        </>
  )
}

export default AddTodo;