import React, { useState, useEffect } from 'react'
import './Todo.css'
import { directive } from '@babel/types'

function Task({task, index, completeTask, removeTaskPass}) {
    return (
        <div 
            className='task' 
            style={{ textDecoration: task.completed ? "line-through" : "", opacity: task.completed ? '.3' : '1' }}
        >
            {task.title}
            <button onClick={() => completeTask(index)}>Complete</button>
            <button onClick={() => removeTaskPass(index)}>x</button>
        </div>
    );
}

function Todo() {
    const [tasks, setTasks] = useState([
        {
            title: 'Grab some pizza',
            completed: true
        },
        {
            title: 'Do your workout',
            completed: true
        },
        {
            title: 'Hang out with your friends',
            completed: false
        }
    ]);

    const [tasksRemaining, setTasksRemaining] = useState(0)

    const addTask = title => {
        const newTasks = [...tasks, {title, completed: false}];
        setTasks(newTasks);
    }

    const completeTask = index => {
        const newTasks = [...tasks]
        newTasks[index].completed = !newTasks[index].completed
        setTasks(newTasks)
    }

    const removeTask = index => {
        const newTasks = [...tasks]
        newTasks.splice(index, 1);
        setTasks(newTasks)
    }

    useEffect(() => {
        setTasksRemaining(tasks.filter(task => !task.completed).length) 
    })

    return (
        <div className='todo-container'>
            <div className='header'>Pending Tasks ({tasksRemaining})</div>
            <div className='header'>TODO - ITEMS</div>
            <div className='tasks'>
                {tasks.map((task, index) => (
                    <Task
                        task={task}
                        index={index}
                        completeTask={completeTask}
                        removeTaskPass={removeTask}
                        key={index}
                    />
                ))}
            </div>
            <div className='create-task'>
                <CreateTask addTask_pass={addTask}></CreateTask>
            </div>
        </div>
    )
}

function CreateTask({ addTask_pass }){
    // 透過onChange 儲存當前輸入的值進 value
    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if(!value) return;

        addTask_pass(value);
        setValue('')
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                className='input'
                value={value}
                placeholder='Add a new task'
                onChange={e => setValue(e.target.value)}
            />
        </form>
    )
}

export default Todo