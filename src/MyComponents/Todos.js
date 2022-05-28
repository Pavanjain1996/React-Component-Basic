import React from 'react'
import TodoItem from './TodoItem'
import AddTodo from './AddTodo'

export default function Todos(props) {
    return (
        <div className="container" style={{ padding: '20px' }}>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='row' style={{ padding: '10px' }}>
                        <h3>You can add tasks here for today</h3>
                    </div>
                    <AddTodo addTodo={props.addTodo} />
                </div>
                <div className='col-md-6'>
                    <div className='row' style={{ padding: '10px' }}>
                        <h3>These are the tasks to be completed</h3>
                    </div>
                    {
                        props.todos.length === 0 ? <div className='row' style={{padding:'10px'}}><center>No Todo's to display</center></div> :
                            props.todos.map((todo) => {
                                return <TodoItem todo={todo} onDelete={props.onDelete} key={todo.sno} />
                            })
                    }
                </div>
            </div>
        </div>
    )
}
