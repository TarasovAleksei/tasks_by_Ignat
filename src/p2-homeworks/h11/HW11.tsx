import React, {useState} from 'react'
import {RangeByAntDesign} from "./common/c9-custom/RangeByAntDesign";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import {InputByAnt} from "./common/InputByAntDesign/InputByAnt";
import classes from './HW11.module.css'

function HW11() {
    const [value1, setValue1] = useState<number>(25)
    const [value2, setValue2] = useState<number>(95)
    const [disabled, setDisabled] = useState<boolean>(false)
    const [min, setMin] = useState<number>(10)
    const [max, setMax] = useState<number>(110)
    const [step, setStep] = useState<number>(5)
    return (
        <div>
            <hr/>
            homeworks 11
            <hr/>
            <SuperRange/>
            <SuperDoubleRange/>
            <div className={classes.container}>
                <div className={classes.forInputs}>
                    <InputByAnt
                        value={min}
                        onChange={setMin}
                        max={49}
                    />
                    <InputByAnt
                        value={max}
                        onChange={setMax}
                        min={50}
                    />
                    <InputByAnt
                        value={step}
                        onChange={setStep}
                        min={1}
                        max={10}
                    />
                </div>
                <div className={classes.forInputs}>
                    <span>min</span>
                    <span>max</span>
                    <span>step</span>
                </div>
                <RangeByAntDesign
                    value1={value1}
                    value2={value2}
                    disabled={disabled}
                    setValue1={setValue1}
                    setValue2={setValue2}
                    setDisabled={setDisabled}
                    min={min}
                    setMin={setMin}
                    max={max}
                    setMax={setMax}
                    step={step}
                    setStep={setStep}
                />
            </div>
            <hr/>
            <hr/>
        </div>
    )
}

export default HW11
