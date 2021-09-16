import React, {ChangeEvent, useState} from 'react';
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../h4/common/c3-SuperCheckbox/SuperCheckbox";
import s from "../HW13.module.css";
import {RequestAPI} from "../API/RequestAPI";


export const Request = () => {
    const [checked, setChecked] = useState<boolean>(false)
    const [answerServ, setAnswerServ] = useState<string>('')
    const requestCB = (checked: boolean) => {
        RequestAPI.postRequest(checked).then(response => {
            setAnswerServ(response.errorText + ', ' + response.info)

        }).catch(error => {
            setAnswerServ(error.response.data.errorText +', '+error.response.data.info)
        })
    }
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)
    return (
        <div className={s.container}>
            <SuperButton onClick={() => {
                requestCB(checked)
            }}>request</SuperButton>
            <SuperCheckbox
                checked={checked}
                onChange={testOnChange}
            />
            {answerServ}
        </div>
    )
}


