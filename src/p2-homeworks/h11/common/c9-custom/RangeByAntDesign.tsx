import React from 'react';
import 'antd/dist/antd.css';
import classes from './RangeByAntDesign.module.css'
import {Slider, Switch} from 'antd';

type PropsType = {
    value1: number,
    value2: number,
    disabled: boolean,
    setValue1: (value: number) => void,
    setValue2: (value: number) => void,
    setDisabled: (disabled: boolean) => void
    min: number,
    max: number,
    setMin: (value: number) => void,
    setMax: (value: number) => void,
    step: number,
    setStep: (step: number) => void
}
export const RangeByAntDesign: React.FC<PropsType> = ({
                                                          value1,
                                                          value2,
                                                          setValue1, setValue2,
                                                          disabled,
                                                          setDisabled,
                                                          setMin,
                                                          setMax,
                                                          ...restProps
                                                      }) => {


    const handleDisabledChange = () => {
        setDisabled(!disabled);
    };
    const onChangeCallBack = (newValue: number) => {
        setValue1(newValue)
    }
    const onDoubleChangeCallBack = (value: [number, number]) => {
        setValue1(value[0])
        setValue2(value[1])
    }

    return (
        <>
            <div className={classes.container}>
                <div className={classes.forValue}>{value1}</div>
                <div className={classes.slider}><Slider onChange={onChangeCallBack} disabled={disabled} value={value1} {...restProps}  /></div>
            </div>
            <div className={classes.container}>
                <div className={classes.forValue}>{value1}</div>
               <div className={classes.slider}> <Slider onChange={onDoubleChangeCallBack} disabled={disabled} range {...restProps} value={[value1, value2]}/></div>
                <div className={classes.forValue}>{value2}</div>
            </div>

            <div className={classes.disabled}>Disabled: <Switch className={classes.switch} size="small" checked={disabled} onChange={handleDisabledChange}/></div>
        </>
    );
}

