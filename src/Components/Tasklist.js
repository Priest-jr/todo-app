import React from 'react'

const Tasklist = (props) => {

    const arr = props.data
    const listItems = arr.map(( val, index ) => {
        return <li key={index}>{val}</li>
    });

    return (
        <div>
            <ul>{listItems}</ul>
        </div>
    )
}

export default Tasklist
