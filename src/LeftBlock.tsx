import {type ChangeEvent} from "react";
import {Button} from "./Button.tsx";

type LeftBlockProps = {
    setDraftMaxValue: (maxValue: number) => void;
    setDraftStartValue: (startValue: number) => void;
    draftMaxValue: number;
    draftStartValue: number;
    setHandler: () => void;
    isError: boolean;
}


export const LeftBlock = (props: LeftBlockProps) => {
    const {
        setDraftMaxValue,
        setDraftStartValue,
        draftMaxValue,
        draftStartValue,
        setHandler,
        isError
    } = props

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setDraftMaxValue(+e.currentTarget.value)
    }
    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setDraftStartValue(+e.currentTarget.value)
    }

    return (
        <div className="panel settings">
            <div className="row">
                <label>max value:</label>
                <input
                    onChange={onChangeMaxValueHandler}
                    type="number"
                    value={draftMaxValue}
                    className={draftMaxValue < 0 || draftMaxValue < draftStartValue || draftStartValue === draftMaxValue ? 'error' : ''}
                />
            </div>
            <div className="row">
                <label>start value:</label>
                <input
                    type="number"
                    value={draftStartValue}
                    onChange={onChangeStartValueHandler}
                    className={draftStartValue < 0 || draftStartValue > draftMaxValue || draftStartValue === draftMaxValue ? 'error' : ''}
                />
            </div>
            <div className="buttons">
                <Button title={'set'} onClick={setHandler} disabled={isError}/>
            </div>
        </div>
    )

}