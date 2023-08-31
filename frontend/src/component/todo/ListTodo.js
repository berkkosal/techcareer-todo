import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import TodoApi from '../../services/TodoApi';

export default function ListTodo() {


  let navigate = useNavigate();

  const [TodoStateApi, setTodoStateApi] = useState([]);

  useEffect(() => {
    TodoApi.todoApiList()
    .then((response)=>{
      console.log(response.data);
      setTodoStateApi(response.data);
    })
    .catch((err) => {console.error(err); });
  })

  //LIST

  //DELETE

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
