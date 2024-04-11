'use client'


import React, {useState} from 'react'
import { FiEdit2 } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import AddTodo from './AddTodo';
import Todo from './Todo';

const TodoList = (props) => {

    // const [todos, setTodos] = useState([]);
    // const createTodo = todo => {
    //     if (todo.trim() !== "") {
    //         setTodos([...todos, {id: todos.length +1, task: todo, isEditing: false, completed: false}]);
    //     }
    // }

    return (
        <div >
            {/* <AddTodo createTodo = {createTodo}/>
            {
                todos.map((todo, index) => {
                    <Todo task={todo} key={index} />
                })
            }

            <Todo /> */}
            {/* <ul>
                {props.tasks.map((task,index) => 
                    <div className="flex w-full gap-[10px] items-center align-center">
                        <li className="list-none
                        text-[20px] text-black opacity-[50%] m-0 w-full border-b-4 border-black
                        mb-[15px] mt-[10px] " key={index}>
                            {task}
                        </li>
                        <FiEdit2 className="size-[35px]
                            hover:text-gray-300 mt-[10px]"
                            />
                        <FiX className="size-[40px]
                            hover:text-gray-300 mt-[10px]"
                            />
                        </div>
                )}
            </ul> */}
        </div>
  )
}

export default TodoList