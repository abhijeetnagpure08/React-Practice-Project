import "./style.css"

const TodoElements = ({ id,title, status,handleToggle , handleDelete}) => {
 function handle(){
  handleToggle(id)
 }
 function del(){
  handleDelete(id)
 }

    return (
      <div>
        {/* <p>
          {title} - {status ? "Completed" : "Pending"}
        </p>
        <button onClick={handle}>Toogle</button>
        <button onClick={del}>Delete</button> */}
        <table className="table">
          <tr>
            <td><p>
          {title} - {status ? "Completed" : "Pending"}
        </p></td>
        <td><button onClick={handle}>Toogle</button></td>
        <td><button onClick={del}>Delete</button></td>
          </tr>
        </table>
      </div>
    );
  };
  export default TodoElements;