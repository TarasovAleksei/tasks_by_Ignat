import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../h10/bll/store";

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean,
    disabled?: boolean
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        red, className, disabled,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const currentColorButton = useSelector<AppStoreType, string>(state => state.theme.currentColorButton)
    const classForBtn = () => {
        switch (currentColorButton) {
            case 'blue':
                return s.default
            case 'brown':
                return s.brownBtn
            case 'grey':
                return s.greyBtn
        }
    }
    const finalClassName = `${red ? s.red : classForBtn()} ${className}`

    return (
        <button
            className={finalClassName}
            disabled={disabled}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
