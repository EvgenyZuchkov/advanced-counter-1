import {Button} from "./Button.tsx";

type RightBlockProps = {
    isError: boolean,
    isValuesChanged: boolean,
    value: number,
    maxValue: number,
    incHandler: () => void
    resetHandler: () => void
}

export const RightBlock = (props: RightBlockProps) => {
    const {
        isError,
        isValuesChanged,
        value,
        maxValue,
        incHandler,
        resetHandler
    } = props
    return (
        <div className="panel counter">
            <div className="display">
                {isError ? (
                    <span className="error-text">Incorrect value!</span>
                ) : isValuesChanged ? (
                    <span className="info-text">enter values and press 'set'</span>
                ) : (
                    <span className={value >= maxValue ? 'value max' : 'value'}>
                            {value}
                        </span>
                )}
            </div>
            <div className="buttons">
                <Button title={'inc'} onClick={incHandler} disabled={value >= maxValue || isValuesChanged}/>
                <Button title={'reset'} onClick={resetHandler} disabled={isValuesChanged}/>
            </div>
        </div>
    )
}