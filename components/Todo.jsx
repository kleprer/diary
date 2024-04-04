import React from 'react'

const Todo = (props) => {
  return (
    <div>
        <h2 className='focus:outline-none text-[20px] text-black 
        opacity-[50%] w-full border-b-4 border-black mt-[10px] mb-[25px]'>
          {props.todo}
        </h2>
    
    </div>
  )
}

export default Todo;