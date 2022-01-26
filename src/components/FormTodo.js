import { useState } from "react";

function FormTodo(props) {
  let [task, setTask] = useState("");
  let [description, setDescription] = useState("");
  function handleSubmit(){

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      name: task,
      description: description
    });
  }

  return(

    <>
    {props.edit ? (
      <div className="row">
        <div className="mb-3">
          <label className="form-label">Task</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=> setTask(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=> setDescription(e.target.value)}/>
        </div>
        <button onClick={handleSubmit} className="btn btn-primary">Update</button>
      </div>
      ):(
      <div className="row">
        <div className="mb-3">
          <label className="form-label">Task</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=> setTask(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=> setDescription(e.target.value)}/>
        </div>
        <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
      </div>
      )
    }
    </>

  )
}

export default FormTodo;
