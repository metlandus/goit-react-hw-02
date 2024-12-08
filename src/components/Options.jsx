import React from 'react'

const Options = ({ onClick, total }) => {
    return (
        <>
            <button onClick={() => onClick("good")}>Good</button>
            <button onClick={() => onClick("neutral")}>Neutral</button>
            <button onClick={() => onClick("bad")}>Bad</button>
            {total > 0 ? <button onClick={() => onClick("reset")}>Reset</button> : ""}
            
        </>
    )
}

export default Options