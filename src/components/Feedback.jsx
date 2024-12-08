import React from 'react'

const Feedback = ({ feedback, total }) => {

    let positive = Math.round((feedback.good / total) * 100);

    return (
        <>
            {total > 0 ?
                <div>
                    <p>Good: {feedback.good}</p>
                    <p>Neutral: {feedback.neutral}</p>
                    <p>Bad: {feedback.bad}</p>
                    <p>Total: {total}</p>
                    <p>Positive: {positive}%</p>
                </div> : "No feedback yet"
            }
        </>
    )
}

export default Feedback