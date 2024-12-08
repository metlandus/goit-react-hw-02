import { useState } from 'react';
import './App.css'
import Description from './components/Description'
import Options from './components/Options'
import Feedback from "./components/Feedback"

function App() {
    const [feedback, setFeedback] = useState({
        good: 0,
        neutral: 0,
        bad: 0,
    });

    let total = feedback.good + feedback.bad + feedback.neutral;

    function handleClick(feedbackType) {
        if (feedbackType === 'reset') {
            setFeedback({ good: 0, neutral: 0, bad: 0 })
        } else {
            setFeedback({
                ...feedback,
                [feedbackType]: feedback[feedbackType] + 1
            }
            )
        }
    };


    return (
        <>
            <Description />
            <Options onClick={handleClick} />
            <Feedback feedback={feedback} total={total} />
        </>
    )
}

export default App
