import React, { useState } from "react";
import CreateToDoField from "./CreateToDoField";
import ToDoItem from "./ToDoItem";
const todos = [
    {
    title: "Finish the essay collaboration",
    isCompleted: false,
    id: 1
},
{
    title: "Read next chapter of the book",
    isCompleted: false,
    id: 2
},
{
    title: "Send the finished assignment",
    isCompleted: false,
    id: 3
},]
const ToDo = ()=>{
    const [to, setTo] = useState(todos)
    const changeTodo = (id)=>{
        const copy = [...to]
        const current = copy.find(t => t.id === id)
        current.isCompleted = !current.isCompleted
        setTo(copy)
    }
    const removeTodo = (id)=>{
        const copy = [...to]
        const current = copy.filter(t=> t.id !==id)
        setTo(current)
        console.log(current)
    }
    
 return(
    <>
    <div className="ToDo">
        <h1 className="ToDoh1">Todo List</h1>
    {to.map(todo=><ToDoItem key={todo.id} todo={todo} changeTodo={changeTodo} removeTodo={removeTodo}/>)}
    <CreateToDoField setTo={setTo}/>
    </div>
    </>
 )   
}
export default ToDo