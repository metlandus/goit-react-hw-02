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

    const handleClick = (type) => {
        setFeedback(prevFeedback => {
            if (type === 'reset') {
                return { good: 0, neutral: 0, bad: 0 }
            }
            if (prevFeedback.hasOwnProperty(type)) {
                return {
                    ...prevFeedback,
                    [type]: prevFeedback[type] + 1
                }
            }
        })
    };

    return (
        <>
            <Description />
            <Options onClick={handleClick} />
            {console.log(feedback)}
            <Feedback feedback={feedback} />
        </>
    )
}

export default App
