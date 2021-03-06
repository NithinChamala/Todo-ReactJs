import React from 'react';
import Card from './UI/Card'
import {useState} from 'react'
import './TodoForm.css';
const TodoForm = (props) => {
    const [task,setTask] = useState("");
    console.log("rendering form")
    const setEnteredTitle = (value) => {
        setTask(value);
        props.changed(value)
    }
    const submitHandler = event => {
        event.preventDefault();
        props.addTask(task);
    };
    return (
        <section className="todo-form">
            <Card>
            <form onSubmit={submitHandler}>
                <div className="form-control">
                <label htmlFor="title">Name</label>
                <input
                    type="text"
                    id="title"
                    value={task}
                    onChange={event => {
                        setEnteredTitle(event.target.value);
                    }}
                />
                </div>
                <div className="todo-form__actions">
                <button type="submit">Add Task</button>
                </div>
            </form>
            </Card>
        </section>
    )
}
export default TodoForm;