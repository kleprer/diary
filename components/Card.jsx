'use client'
import React, { useState, useEffect, createContext } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import api from '../app/api';


const Card = (props) => {


  const addTodo = async (todo) => { 
    props.setTodos([...(props.todos), todo]);
    await api.post(`/planner/${props.type}`, todo);

    props.fetchTodos();
    
  }

  const toggleComplete = async (id) => {
    setTodos(props.todos.map(todo => todo.id === id ?
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
              <TodoForm addTodo={addTodo} todos={props.todos} setTodos={props.setTodos}
              chosenDate = {props.chosenDate}/>
            <div className="max-h-[132px] flex-col overflow-auto"> 
                {


                // (todos || []).map((todo, index) => (
                //   <Todo task={todo} key={index}
                //   toggleComplete={toggleComplete}
                //   deleteTodo={deleteTodo}/>
                //   )
                // )
                }
              </div>
          </div>
      </div>
  )
}

export default Card;
