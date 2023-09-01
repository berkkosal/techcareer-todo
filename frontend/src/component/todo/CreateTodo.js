import React, { useEffect, useState } from 'react'
import TodoApi from '../../services/TodoApi';

function CreateTodo() {

  const [todoTitle, setTodoTitle] = useState('');
  const [todoDescription, setTodoDesc] = useState('')
  const [error, setError] = useState();

  useEffect(() => {
    setError(undefined)
  }, [todoTitle, todoDescription]);

  //CREATE
  const createTodo = async (event) => {
    event.preventDefault();
    const newTodo = {
      title: todoTitle,
      description: todoDescription
    }

    console.log(newTodo);

    setError(undefined);

    try {
      const response = await TodoApi.todoApiCreate(newTodo);
    } catch (err) {
      setError(err.response.data.validationErrors);
    }


  }
  const todoTitleOnChange = (event) => {
    const { value } = event.target;
    setTodoTitle(value)
  }

  const todoDescOnChange = (event) => {
    const { value } = event.target;
    setTodoDesc(value)
  }




  return (
    <>
      <form>
        <h2 className="display-3 mt-4">{('todo_title')}</h2>
        <div className="form-group">
          <span>{('todo_title')}</span>
          <input
            type="text"
            className="form-control"
            required={true}
            autoFocus={true}
            id="category_data"
            name="category_data"
            onChange={todoTitleOnChange}

          />
          <span>{('todo_desc')}</span>
          <input
            type="text"
            className="form-control"
            required={true}
            autoFocus={true}
            id="category_data"
            name="category_data"
            onChange={todoDescOnChange}

          />
          
          {error ? <div className="alert alert-danger" role="alert">
            {error.categoryName}
          </div> : ""}
        </div>
        <button
          type='submit'
          className="btn btn-primary mt-3"
          disabled={!true}
          onClick={createTodo}>{('create')}</button>
      </form>
    </>
  )
}

export default CreateTodo;