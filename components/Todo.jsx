import React from 'react'
import { FiEdit2 } from "react-icons/fi";
import { FiX } from "react-icons/fi";

const Todo = (props) => {
  return (
    <div className="flex items-center justify-between">
      <h2 lassName="list-none m-auto
      text-[20px] text-black opacity-[50%] m-0 border-b-4 border-black
      mb-[15px] mt-[10px]">
        {props.task.title}
      </h2>
      <div className="flex items-center">
        <button>
          <FiEdit2 className="size-[25px]
          hover:text-gray-300 mt-[10px]"/>
        </button>
        <button>
          <FiX className="size-[30px]
          hover:text-gray-300 mt-[10px]"/>
        </button>
      </div>
        {/* <h2 className="list-none
          text-[20px] text-black opacity-[50%] m-0 w-full border-b-4 border-black
          mb-[15px] mt-[10px]">
          aaa
        </h2>
        <button>
          <FiEdit2 className="size-[25px]
          hover:text-gray-300 mt-[10px]"/>
        </button>
        <button>
          <FiX className="size-[30px]
            hover:text-gray-300 mt-[10px]"/>
        </button> */}
    </div>
  )
}

export default Todo;