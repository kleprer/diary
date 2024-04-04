'use client'
import React, { useState } from 'react'
import AddTodo from './AddTodo'


const Card = (props) => {
  return (
    <div className="flex flex-col gap-[15px] items-end w-full 
        pl-[10px] pr-[10px] pt-[10px] h-[288px]">
        <div className="w-[631px] ml-[30px] border-black border-4 
        rounded-xl p-[10px] min-h-[250px]">
            <h2 className="text-[30px] pb-[15px]">
                {props.title}
            </h2>
            <AddTodo />
        </div> 
    </div>
  )
}

export default Card;