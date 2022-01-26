import Item from "./item";

function List(props){


  let datas = props.todos.map((item,index)=> <Item key={index} todo={item} handleDelete={props.handleDelete} handleEdit={props.handleEdit}></Item>)
  return(
    <div className="row">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Task</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
         {datas}
        </tbody>
      </table>
      </div>
  )
}

export default List;
