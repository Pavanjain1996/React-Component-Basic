import React, { useState } from 'react'

export default function AddTodo(props) {
    const [task, setTask] = useState("")
    const [desc, setDesc] = useState("")
    const submit = (e) => {
        e.preventDefault();
        if(!task || !desc){
            alert('Task or Description can not be blank');
        }
        else{
            props.addTodo(task, desc);
            setTask("")
            setDesc("")
        }
    }
    return (
        <div>
        <div className='row' style={{padding:'10px'}}>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="inputTask" className="form-label">Task</label>
                    <input type="text" value={task} onChange={(e) => {setTask(e.target.value)}} className="form-control" id="inputTask" />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputDescription" className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e) => {setDesc(e.target.value)}} className="form-control" id="inputDescription" />
                </div>
                <button type="submit" className="btn btn-primary">Add Task</button>
            </form>
        </div>
        </div>
    )
}