'use client'
import React, { useState, useEffect, createContext } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import api from '../app/api';


const Card = (props) => {

  let name;
  (props.type === "plans") 
    ? name = "plan_name"
    : name = "goal_name"

  const fetchTodos = async () => {
    const response = await api.get(`/planner/${props.type}`);
    setTodos(response.data)
  };
    
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({
    'user_id': 1,
    [`${name}`]: '',
    'date': '',
    'id': 0
  });

  //AXIOS
  

  useEffect(() => {
    fetchTodos();
  }, [])
  
  const addTodo = async (todo) => { 

    setNewTodo({
      'user_id': 1,
      [`${name}`]: todo,
      'date': props.chosenDate,
      'id': todos.length + 1 
    })

    setTodos((todos || []).concat([{
      id: (todos || []).length + 1,
      title: todo,
      completed: false,
      date: props.chosenDate,
    }]))
    console.log(newTodo);
    await api.post(`/planner/${props.type}`, JSON.stringify(newTodo))
    .then(response => {
      console.log(response)
      next()
    })
    .catch(error => {
      console.log(error)
    }
    );
    
    
    
    fetchTodos();
    setNewTodo({
      'user_id': '',
      [`${name}`]: '',
      'date': '',
      'id': 0
    })

    

    
  
  }
  // CONNECT
  // const fetchTodos = async () => {
  // const response = await fetch(`http://localhost:8081/planner/${props.type}`)
  //   const todos = await response.json()
  //   setTodos(todos.data)
  // }

  // useEffect(() => {
  //   fetchTodos()
  // }, [])


  const toggleComplete = async (id) => {
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
              <TodoForm addTodo={addTodo} todos={todos}  name={name} type={props.type}/>
            <div className="max-h-[132px] flex-col overflow-auto"> 
                {(todos || []).map((todo, index) => (
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
