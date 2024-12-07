import React from 'react'

const Options = ({onClick}) => {
    return (
        <>
            <button onClick={() => onClick("good")}>Good</button>
            <button onClick={() => onClick("neutral")}>Neutral</button>
            <button onClick={() => onClick("bad")}>Bad</button>
            <button onClick={() => onClick("reset")}>Reset</button>
        </>
    )
}

export default Options