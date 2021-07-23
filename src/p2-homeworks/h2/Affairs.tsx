import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import classes from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: (priority: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map(a => {
            return (
                <div className={classes.container}>
                    <Affair
                        key={a._id}
                        affair={a}
                        deleteAffairCallback={props.deleteAffairCallback}
                    />
                </div>

            )
        }
    )

    const setAll = () => {
        props.setFilter('all')
    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <div>
            {mappedAffairs}
            <div className={classes.bntAll}>
                <button className={classes.bnt} onClick={setAll}>All</button>
                <button className={classes.bnt} onClick={setHigh}>High</button>
                <button className={classes.bnt} onClick={setMiddle}>Middle</button>
                <button className={classes.bnt} onClick={setLow}>Low</button>
            </div>

        </div>
    )
}

export default Affairs
