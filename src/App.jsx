import './App.css'
import Description from './components/Description'
import Options from './components/Options'

function App() {

    const feedback = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    return (
        <>
            <Description />
            <Options />
        </>
    )
}

export default App
