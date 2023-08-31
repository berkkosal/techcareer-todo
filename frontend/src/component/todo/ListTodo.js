import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

export default function ListTodo() {


  let navigate = useNavigate();

  const [TodoApi, setTodoApi] = useState();

  // useEffect(()=>{
  // doldurulacak
  // })

  //UPDATE
  const setUpdateTodoData = (data) => {
    let { id, todoName, systemDate } = data;
    localStorage.setItem('todo_update_id', id);
    localStorage.setItem('todo_update_name', todoName);
    localStorage.setItem('todo_update_date', systemDate)
  };

  //VIEW
  const setViewTodoData = (id) => {
    localStorage.setItem('todo_view_id', id)
  };


  return (
    <div>
      LIST TODO
    </div>
  )
}
