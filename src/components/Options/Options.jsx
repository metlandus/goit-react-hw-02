import React from 'react'
import "./options.css"

const Options = ({ onClick, total }) => {
    return (
        <div className='options'>
            <button onClick={() => onClick("good")}>Good</button>
            <button onClick={() => onClick("neutral")}>Neutral</button>
            <button onClick={() => onClick("bad")}>Bad</button>
            {total > 0 ? <button onClick={() => onClick("reset")}>Reset</button> : ""}
            
        </div>
    )
}

export default Options