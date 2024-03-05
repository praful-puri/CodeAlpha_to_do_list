import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { MdOutlineDeleteForever } from "react-icons/md";
import { TiEdit } from 'react-icons/ti';
import { IoIosCheckmarkCircle } from "react-icons/io";


const Todo = ({ todos, completeTodo, removeTodo, updateTodo  }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });
  

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }


  return todos.map((todo, index) => (
    <div
       className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
        
    > 
      <div key={todo.id} >
        {todo.text}
      </div>


      <div className='icons'>
      <IoIosCheckmarkCircle className={todo.isComplete ? 'green' : '' } onClick={() => completeTodo(todo.id)}
        
       />

      <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        />
        <MdOutlineDeleteForever 
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
        
      </div>
    </div>
  ));
};

export default Todo;
