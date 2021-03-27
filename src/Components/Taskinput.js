import React, {  useState } from 'react';
import './Taskinput.scss';

const Taskinput = (props) => {


    const [ list, setList ] =useState("");

    const handleChange = (e) => {
        setList(e.target.value);
    }

    const handleSubmit = (e) => {
        props.handleSubmit(list)
        setList("")
        e.preventDefault()
    }


    return (
        <div>
            <form className="form-input" onSubmit={handleSubmit}>
                <input type="text" value={list} placeholder="Add Task" onChange={handleChange}/>
                <button type="submit" className="btn btn-outline-success">Add</button>
            </form>
        </div>
    )
}

export default Taskinput
