import './App.css'
import {type ChangeEvent, useState} from "react";

function App() {
    const [value, setValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    const [draftMaxValue, setDraftMaxValue] = useState(5)
    const [startValue, setStartValue] = useState(0)

    const incHandler = () => {
        if (value < maxValue) {
            setValue(value + 1)
            localStorage.setItem('counterValue', JSON.stringify(value + 1))
        }
    }

    const setHandler = () => {
        setMaxValue(draftMaxValue)
    }

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setDraftMaxValue(+e.currentTarget.value)
    }

    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(+e.currentTarget.value)
        setValue(+e.currentTarget.value)
    }

    const resetHandler = () => {
        setValue(0)
    }
    return (
        <div className="App">
            {/* Левая панель — настройки */}
            <div className="panel settings">
                <div className="row">
                    <label>max value:</label>
                    <input onChange={onChangeMaxValueHandler} type="number" value={draftMaxValue}/>
                </div>
                <div className="row">
                    <label>start value:</label>
                    <input type="number" value={startValue} onChange={onChangeStartValueHandler}/>
                </div>
                <div className="buttons">
                    <button onClick={setHandler}>set</button>
                </div>
            </div>

            {/* Правая панель — счётчик */}
            <div className="panel counter">
                <div className="display">
                    <span className={value >= maxValue ? 'value max' : 'value'}>{value}</span>
                </div>
                <div className="buttons">
                    <button onClick={incHandler} disabled={value >= maxValue}>inc</button>
                    <button onClick={resetHandler}>reset</button>
                </div>
            </div>
        </div>
    )
}

export default App