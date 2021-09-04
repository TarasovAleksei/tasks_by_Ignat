import React from 'react';
import 'antd/dist/antd.css';
import { InputNumber } from 'antd';

type PropsType = {
    value: number,
    onChange:(value: number)=>void,
    max?: number,
    min?:number,
}

export const InputByAnt: React.FC<PropsType> = ({value, onChange, min, max })=>{
    return (
        <InputNumber defaultValue={value} min={min} max={max} onChange={onChange} />
    )
}
