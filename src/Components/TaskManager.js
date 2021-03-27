import React, { useState } from 'react';

import Tasklist from './Tasklist.js';
import Taskinput from './Taskinput.js';



const TaskManager = (props) => {

    const [ tasks, setTasks ] = useState(props.task);

    const addTask = (newTask) =>{
        setTasks([...tasks, newTask])
    } 

    return (
        <div>
            <h1>Task Away!</h1>
            <Taskinput  handleSubmit={addTask}/>
            <Tasklist data={tasks}/>
        </div>
    )
}

export default TaskManager
