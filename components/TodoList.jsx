'use client'


import React, {useState} from 'react'

const TodoList = () => {

    const [tasks, setTasks] = useState(['a','b','c']);


    return (
        <div>
            <ul>
                {tasks.map((task,index) => 
                    <li className="list-none
                    text-[20px] text-black opacity-[50%] w-full border-b-4 border-black
                    mb-[15px] mt-[10px]" key={index}>{task}</li>
                )}
            </ul>
        </div>
  )
}

export default TodoList