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
    })
    function handleClick() {
        setFeedback(good + 1)
        console.log(feedback)
    }
    return (
        <>
            <Description />
            <Options onClick={handleClick} />
            <Feedback></Feedback>
            {console.log(feedback)}
        </>
    )
}

export default App
