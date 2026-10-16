import './App.css'
import {useEffect, useState} from "react";

function App() {

    const [value, setValue] = useState<number>(() => {
        const stored = localStorage.getItem('counterValue')
        return stored !== null ? JSON.parse(stored) : 0
    })

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(value))
    }, [value])

    const incHandler = () => {
        setValue(value + 1)
    }

    const setToLocalStorageHandler = () => {
        localStorage.setItem('counterValue', JSON.stringify(value))
        localStorage.setItem('counterValue + 1', JSON.stringify(value + 1))
    }

    const getToLocalStorageHandler = () => {
        let newValue = localStorage.getItem('counterValue')
        if (newValue) {
            setValue(JSON.parse(newValue))
        }
    }

    const clearLocalStorageHandler = () => {
        localStorage.clear()
        setValue(0)
    }

    const removeFromLocalStorageHandler = () => {
        localStorage.removeItem('counterValue + 1')
    }

    return (
        <div className="App">
            <h1>Local Storage</h1>
            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>
            <button onClick={setToLocalStorageHandler}>setToLocalStorage</button>
            <button onClick={getToLocalStorageHandler}>getToLocalStorage</button>
            <button onClick={clearLocalStorageHandler}>clearLocalStorage</button>
            <button onClick={removeFromLocalStorageHandler}>removeFromLocalStorage</button>
        </div>
    )
}

export default App
