import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeColorButton, changeColorFont, changeColorInput, InitialStateType} from "./bll/themeReducer";


export const HW12 = () => {
    const {
        themesForFont,
        themesForButton,
        themesForInput,
        currentColorFont,
        currentColorButton,
        currentColorInput
    } = useSelector<AppStoreType, InitialStateType>(state => state.theme)
    const dispatch = useDispatch()
    const onChangeColorFont = (themeFont: any) => {
        dispatch(changeColorFont(themeFont))
    }
    const onChangeColorBtn = (themeBtn:any) => {
        dispatch(changeColorButton(themeBtn))
    }
    const onChangeColorInput = (themeInput: any) => {
        dispatch(changeColorInput(themeInput))
    }
    return (
        <div className={s.container}>
            <hr/>
            homeworks 12
            <div className={s.title}>Settings panel</div>
            <div className={s.settingsContainer}>
                <div className={s.settings}>
                    <div className={s.item}>Choose your font color</div>
                    <div className={s.item}>Choose your color for button</div>
                    <div className={s.item}>Choose your color for input</div>
                </div>
                <div className={s.settings}>
                    <div className={s.item}><SuperSelect onChangeOption={onChangeColorFont} value={currentColorFont}
                                                         options={themesForFont}/></div>
                    <div className={s.item}><SuperSelect onChangeOption={onChangeColorBtn} options={themesForButton}
                                                         value={currentColorButton}/></div>
                    <div className={s.item}><SuperSelect onChangeOption={onChangeColorInput} options={themesForInput}
                                                         value={currentColorInput}/></div>
                </div>
                <div className={s.settings}>
                    <div className={s.item}> You choose: {currentColorFont} font</div>
                    <div className={s.item}><SuperButton>{currentColorButton}</SuperButton></div>
                    <div className={s.item}><SuperInputText/></div>
                </div>
            </div>

        </div>
    );
}


