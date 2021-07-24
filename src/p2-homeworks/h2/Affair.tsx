import React from 'react'
import {AffairType} from "./HW2";
import classes from './Affair.module.css'

type classNameType = () => string | undefined
type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const classForPriority: classNameType = () => {
        switch (props.affair.priority) {
            case 'high':
                return classes.priorityHigh
            case 'middle':
                return classes.priorityMiddle
            case 'low':
                return classes.priorityLow
        }
    }
    return (
        <div className={classes.wrapper}>
            <div className={classes.item}>
                <div className={classes.id}>{props.affair._id}</div>
                <div className={classes.name}> {props.affair.name}</div>
                <div className={classForPriority()}> {props.affair.priority}</div>
                <button className={classes.btnDel} onClick={() => {
                    props.deleteAffairCallback(props.affair._id)
                }}>x
                </button>
            </div>

        </div>
    )
}

export default Affair
