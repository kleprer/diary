'use client'
import React, { useState, useEffect, createContext } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

const Card = (props) => {
  let newTodo;
  const [todos, setTodos] = useState([]);
  const hasScroll = todos.length > 3;
  let name;
  (props.name === "plans") 
    ? name = "plan_name"
    : name = "goal_name"

  const addTodo = (todo) => { 
    setTodos(todos.concat([{
      id: todos.length + 1,
      title: todo,
      completed: false,
      date: props.chosenDate,
    }]
    
  ))
    newTodo = {
      user_id: 1,
      [name]: todo,
      date: props.chosenDate

    }
  }
  // CONNECT
  const fetchTodos = async () => {
  const response = await fetch(`http://localhost:8081/planner/${props.type}`)
    const todos = await response.json()
    setTodos(todos.data)
  }

  useEffect(() => {
    fetchTodos()
  }, [])


  const toggleComplete = id => {
    setTodos(todos.map(todo => todo.id === id ?
    {...todo, completed: !todo.completed} : todo))
  }

  const deleteTodo = async (id) => {
    setTodos(todos.filter(todo => todo.id !== id));

  }
  return (
      <div className="flex flex-col gap-[5px] items-end w-full 
          pl-[10px] pr-[10px] pt-[10px] max-h-[278px]">
          <div className="w-[631px] border-black border-4 
          rounded-xl p-[10px] max-h-[260px] min-h-[260px]">
              <h2 className="text-[28px] pb-[15px]">
                  {props.title}
              </h2>
              <TodoForm addTodo={addTodo} newTodo={newTodo} todos={todos} fetchTodos={fetchTodos} type={props.type}/>
            <div className="max-h-[132px] flex-col overflow-auto"> 
                {todos.map((todo, index) => (
                  <Todo task={todo} key={index}
                  toggleComplete={toggleComplete}
                  deleteTodo={deleteTodo}/>
                  )
                )
                }
              </div>
          </div> 
      </div>
  )
}

export default Card;