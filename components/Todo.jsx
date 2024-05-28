import React from 'react'
import { FiX } from "react-icons/fi";


const Todo = (props) => {

  return (
    <div className="flex items-center justify-between w-[588px] min-h-[44px] border-b-4 border-black"
    style={ { opacity: props.task.completed ? '50%': '100%'} }>
      <h2 onClick={() => props.toggleComplete(props.task.id)}
      className={`${props.task.completed 
        ? 'completed' 
        : `list-none w-full cursor-pointer text-[20px] text-black m-0 mb-[5px] mt-[5px] mr-[5px]`}`
      }> 
        {props.task.title}
      </h2>
      <button>
        <FiX className="size-[30px] hover:text-gray-300 mt-[10px]"
        onClick={() => props.deleteTodo(props.task.id)}/>
      </button>
    </div>
  )
}

export default Todo;