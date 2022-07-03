import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Check from "./Check";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const ToDoItem = ({todo, changeTodo, removeTodo})=>{
    return(
        <>
        <div className="ToDoItem">
        <div onClick={()=>changeTodo(todo.id)}>
        <Check isCompleted={todo.isCompleted} />
        </div>
        <div>{todo.title}</div>
        <div onClick={()=>removeTodo(todo.id)}>
            <FontAwesomeIcon className="iconTrash" icon={faTrash}/>
        </div>
        </div>
        </>
    )
}
export default ToDoItem