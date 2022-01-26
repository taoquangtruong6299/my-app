import { useState } from "react";
import FormTodo from "./FormTodo";

function Item(props){

  const [edit, setEdit] = useState({
    id: null,
    value: {name:'',description:''}
  });
  let {id,name, description} = props.todo;

  const submitUpdate = value => {
    props.handleEdit(edit.id, value);
    setEdit({
      id: null,
      value: {name:'',description:''}
    });
  };

  if (edit.id) {
    return <FormTodo edit={edit} onSubmit={submitUpdate} />;
  }
  return(
    <tr>
            <th scope="row">{id}</th>
            <td>{name}</td>
            <td>{description}</td>
            <td>
              <button className="btn btn-warning"     onClick={() => setEdit({ id: id, value: {name:name,description:description} })}>Edit</button>
              <button className="btn btn-danger" onClick={()=>props.handleDelete(id)}>Delete</button>
            </td>
          </tr>
  )
}

export default Item;
