import React from 'react'

export default function TodoItem({todo, onDelete}) {
    return (
        <div>
            
            <div className='row' style={{padding:'10px'}}>
                <div className='col-md-4'>{todo.sno}. {todo.task}</div>
                <div className='col-md-6'>{todo.desc}</div>
                <div className='col-md-2'>
                    <button className='btn btn-danger btn-sm' onClick={() => {onDelete(todo)}}>Delete</button>
                </div>
            </div>
        </div>
    )
}
