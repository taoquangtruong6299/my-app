import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import FormTodo from './components/FormTodo';
import List from './components/list';
import axios from 'axios';
function App() {
  let todos = [

  ]
  let [listTodo, setlistTodo] = useState(todos);
  useEffect(()=>{
    axios.get('https://61ef5c9ad593d20017dbb471.mockapi.io/todos')
    .then(function (response) {
      // handle success
      console.log(response);
      todos = response.data
      setlistTodo(todos)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })

    handleDelete();
    handleEdit();
  },[])

  console.log(listTodo);

  function handleDelete(id){

    axios.delete('https://61ef5c9ad593d20017dbb471.mockapi.io/todos/'+id)
    .then(function (response) {
      // handle success
      console.log(response);
      let index = listTodo.findIndex((item)=> item.id == id)
      let todo = listTodo.splice(index,1)
      setlistTodo([...listTodo])
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })



  }

  const addTodo = (todo) => {
    axios.post('https://61ef5c9ad593d20017dbb471.mockapi.io/todos',todo)
    .then(function (response) {
      // handle success
      console.log(response);
      const newTodos = [todo, ...listTodo];
      setlistTodo(newTodos);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  };

  function handleEdit(id,newValue){
    axios.put('https://61ef5c9ad593d20017dbb471.mockapi.io/todos/'+id,newValue)
    .then(function (response) {
      // handle success
      console.log(response);
      setlistTodo(listTodo => listTodo.map(item => (item.id === id ? newValue : item)));

    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }

  return (
    <div className="container">
      <h1>Todos List</h1>
      <FormTodo onSubmit={addTodo}></FormTodo>
      <List todos={listTodo} handleDelete={handleDelete} handleEdit={handleEdit}></List>
    </div>
  );
}

export default App;
