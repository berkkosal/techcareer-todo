import React, { useEffect, useState } from 'react'
import TodoApi from '../../services/TodoApi';

export default function ListTodo() {



  const [TodoStateApi, setTodoStateApi] = useState([]);

  useEffect(() => {
    TodoApi.todoApiList()
      .then((response) => {
        console.log(response.data);
        setTodoStateApi(response.data);
      })
      .catch((err) => { console.error(err); });
  }, []);


  //LIST
  const getListTodo = (() => {
    TodoApi.todoApiList()
      .then((response) => {
        console.log(response.data);
        setTodoStateApi(response.data);
      })
      .catch((err) => { console.error(err); });
  });

  //DELETE
  const setDeleteTodo = ((id) => {
    if (window.confirm("Silmek istediğinizden emin misiniz ?")) {
      TodoApi.categoryApiDeleteById(id)
        .then(() => {
          getListTodo();
        })
    } else {
      alert("Silinmedi.")
    }
  });

  //UPDATE
  const setUpdateTodo = (data) => {
    let { uuid, title } = data;
    localStorage.setItem(uuid);
    localStorage.setItem(title);
  }



  return (
    <div>
      <ul>
        {TodoStateApi.map((data) => (
          <li key={data.uuid}>
            <div>
              <strong>ID:</strong> {data.uuid}
            </div>
            <div>
              <strong>Title:</strong> {data.title}
            </div>
            <div>
              <strong>Description:</strong> {data.description}
            </div>
            <div>
              <i onClick={() => setUpdateTodo(data)} className="fa-solid fa-pen-to-square text-primary"></i>
            </div>
            <div>
              <i onClick={() => setDeleteTodo(data.id)} className="fa-solid fa-trash text-danger"></i>
            </div>
          </li>
        ))}
      </ul>

    </div>
  )
}
