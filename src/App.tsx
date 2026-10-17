import './App.css'
import {useState} from "react";
import {LeftBlock} from "./LeftBlock.tsx";
import {RightBlock} from "./RightBlock.tsx";

function App() {
    // Применённые значения (реально работают)
    const [value, setValue] = useState(0)
    const [maxValue, setMaxValue] = useState(() => {
        const savedValue = localStorage.getItem("maxValue");
        return savedValue ? JSON.parse(savedValue) : 5;
    })
    const [startValue, setStartValue] = useState(() => {
        const savedValue = localStorage.getItem("startValue");
        return savedValue ? JSON.parse(savedValue) : 0;
    })

    // Черновики (то, что в инпутах)
    const [draftMaxValue, setDraftMaxValue] = useState(maxValue)
    const [draftStartValue, setDraftStartValue] = useState(startValue)

    const incHandler = () => {
        if (value < maxValue) {
            setValue(value + 1)
            localStorage.setItem('counterValue', JSON.stringify(value + 1))
        }
    }

    const setHandler = () => {
        // Применяем черновики и сбрасываем счетчик на старт
        setMaxValue(draftMaxValue)
        setStartValue(draftStartValue)
        setValue(draftStartValue)
        localStorage.setItem('maxValue', JSON.stringify(draftMaxValue))
        localStorage.setItem('startValue', JSON.stringify(draftStartValue))
    }


    const resetHandler = () => {
        setValue(0) // Сброс к применённому стартовому значению
    }

    // Проверки для UI
    const isError = draftStartValue < 0 || draftMaxValue < 0 || draftStartValue >= draftMaxValue
    const isValuesChanged = draftMaxValue !== maxValue || draftStartValue !== startValue

    return (
        <div className="App">
            {/* Левая панель — настройки */}
            <LeftBlock
                setDraftMaxValue={setDraftMaxValue}
                setDraftStartValue={setDraftStartValue}
                draftMaxValue={draftMaxValue}
                draftStartValue={draftStartValue}
                setHandler={setHandler}
                isError={isError}
            />

            {/* Правая панель — счётчик */}

            <RightBlock
                isError={isError}
                isValuesChanged={isValuesChanged}
                value={value}
                maxValue={maxValue}
                incHandler={incHandler}
                resetHandler={resetHandler}
            />
        </div>
    )
}

export default App