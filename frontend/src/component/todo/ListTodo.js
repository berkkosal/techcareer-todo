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






  return (
    <div>
      <table>
      <tbody>
        {
          TodoStateApi.map((data) =>
            <tr key={data.uuid}>
              <td>{data.uuid}</td>
              <td>{data.title}</td>
              <td>{data.description}</td>
            </tr>
          )
        }
      </tbody>
      </table>
    </div>
  )
}
