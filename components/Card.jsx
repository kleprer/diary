'use client'
import React, { useState } from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo';

const Card = (props) => {
  
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => { 
    setTodos(todos.concat([{
      id: Date.now(),
      title: todo,
      completed: false,
      isEditing: false
    }]))
    console.log(todos);
  }

  // const addTodo = todo => {
  //   setTodos([...todos, {id: uuidv4, task: todo, completed: false,
  //   isEditing: false}])
  // }

  return (
    <div className="flex flex-col gap-[5px] items-end w-full 
        pl-[10px] pr-[10px] pt-[10px] h-[288px]">
        <div className="w-[631px] border-black border-4 
        rounded-xl p-[10px] min-h-[250px]">
            <h2 className="text-[28px] pb-[15px]">
                {props.title}
                
            </h2>
            <TodoForm addTodo={addTodo}/>
            {todos.map((todo, index) => (
              <Todo task={todo} key={index}/>
              )
            )
            }



            
        {/* <TodoList /> */}


            {/* <AddTodo addTodo={addTodo}/>
            {todos.map((todo,index) => {
              <Todo/>
            })} */}
        </div> 
    </div>
  )
}

export default Card;