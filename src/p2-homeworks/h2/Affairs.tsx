import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import classes from './Affairs.module.css'

type AffairsPropsType = {
    data: AffairType[]
    setFilter: (priority: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
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
    }
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

                <button className={props.filter === 'all' ? classes.activeBnt : classes.bnt} onClick={setAll}>All</button>
                <button className={props.filter === 'high' ? classes.activeBnt : classes.bnt} onClick={setHigh}>High</button>
                <button className={props.filter === 'middle' ? classes.activeBnt : classes.bnt} onClick={setMiddle}>Middle</button>
                <button className={props.filter === 'low' ? classes.activeBnt : classes.bnt} onClick={setLow}>Low</button>
            </div>

        </div>
    )
}

export default Affairs
