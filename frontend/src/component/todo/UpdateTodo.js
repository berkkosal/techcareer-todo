import React from 'react'
import { useEffect, useState } from 'react'
import TodoApi from '../../services/TodoApi';
import { useParams, useNavigate } from 'react-router';

export default function UpdateTodo() {


  const navigate=useNavigate();

  const [todoTitle, setTodoTitle] = useState('');
  const [todoDescription, setTodoDescription] = useState('');
  const [id, setID] = useState(null);

  const updateID =useParams();

  useEffect(() => {
    
    setID(updateID.id);

    //FIND
    TodoApi.categoryApiFindById(updateID.id)
    .then((response) => {
      console.log(response.data);
      setTodoTitle(response.data.categoryName)
    })
    .catch((err) => {
      console.error(err);
    });
  },[])//end effect

  // POST
  const todoUpdate= async (event)=>{
    event.preventDefault();

    const newTodo={
      title: todoTitle,
      description: todoDescription
    }
    console.log(newTodo);


    try {
      const response= await TodoApi.todoApiUpdate(id,newTodo)
      if (response.status===200){
        navigate('/category/list');
      }
   } catch (err) {
    console.error(err);
   }
  }

  
  return (
    <React.Fragment>
      <form>
        <h2 className="display-3 mt-4">{('category_update')}</h2>
        <div className="form-group">
          <span>{('category_name')}</span>
          <input 
          type="text" 
          className="form-control" 
          placeholder={('category_name')} 
          required={true}
          autoFocus={true}
          id="category_data"
          name="category_data"
          onChange={(event)=>{setTodoTitle(event.target.value)}}
          value={todoTitle}
          />
          </div>
          <button type='submit' className="btn btn-primary mt-3" onClick={todoUpdate}>{('update')}</button>
      </form>
    </React.Fragment>
  ) //end retur
}

