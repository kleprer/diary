'use client'
import Image from 'next/image'
import React from 'react'
import { FiPlus } from "react-icons/fi";
const AddTodo = (props) => {
  return (
    <div className="flex gap-[5px] items-center">
        <input type="text" value={props.newTask} className='focus:outline-none text-[20px] text-black p-[5px]
        w-full rounded-xl border-4 border-black '></input>
        <FiPlus className="size-[40px]
        hover:hover:text-gray-300"/>
    </div>
  )
}

export default AddTodo