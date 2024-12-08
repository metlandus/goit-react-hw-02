import { useState, useEffect } from 'react';
import './App.css'
import Description from './components/Description'
import Options from './components/Options/Options'
import Feedback from "./components/Feedback"

function App() {
    const [feedback, setFeedback] = useState(() => {
        const localFeedback = JSON.parse(localStorage.getItem("feedback"));
        return (!localFeedback ? {
            good: 0,
            neutral: 0,
            bad: 0
        } : localFeedback
        )
    });

    useEffect(() => {
        localStorage.setItem("feedback", JSON.stringify(feedback));
    }, [feedback]);

    const totalFeedback = feedback.good + feedback.bad + feedback.neutral;

    function updateFeedback(feedbackType) {
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
            <Options onClick={updateFeedback} total={totalFeedback} />
            <Feedback feedback={feedback} total={totalFeedback} />
        </>
    )
}

export default App
