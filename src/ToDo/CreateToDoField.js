import React, { useState } from "react";
const CreateToDoField = ({setTo})=>{
    const [title, setTitle] = useState("")

    const addToDo = (title)=>{
        setTo(prev=>[{
            id: new Date(),
            title: title,
            isCompleted: false 
        },
    ...prev,
    ])
    setTitle("")
    }

    console.log(title)
    return(
        <>
        <div className="CreateToDoFieldBlock">
            <input type="text" placeholder="Add text" className="CreateToDoField" onChange={e => setTitle(e.target.value)} value={title} onKeyPress={e =>e.key === "Enter" && addToDo(title)}></input>
        </div>
        </>
    )
}
export default CreateToDoField