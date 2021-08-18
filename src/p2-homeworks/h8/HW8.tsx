import React, {useState} from 'react'
import {homeWorkReducer, SortPeopleAC, CheckPeopleAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW8.module.css'

export type userType = {
    _id: number,
    name: string,
    age: number
}
const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<userType[]>(initialPeople)

    const finalPeople = people.map(p => (
        <div className ={s.items} key={p._id}>
           <div className ={s.name}>{p.name}</div> <div>{p.age}</div>
        </div>
    ))

    const sortUp = () => {
        setPeople(homeWorkReducer(initialPeople, SortPeopleAC('up')))
    }
    const sortDown = () => {
        setPeople(homeWorkReducer(initialPeople, SortPeopleAC('down')))
    }
    const checkAge = () => {
        setPeople(homeWorkReducer(initialPeople, CheckPeopleAC(18)))
    }

    return (
        <div>
            <hr/>
            homeworks 8
            <hr/>
            <div className={s.container}>
                {finalPeople}
            </div>
            <div className={s.btns}><SuperButton style={{
                width: "100px",
                fontSize: '10px'
            }} onClick={sortUp}> sort up </SuperButton>
                <SuperButton style={{
                    width: "100px",
                    fontSize: '10px',
                    marginLeft: '20px'
                }} onClick={sortDown}> sort down </SuperButton>
                <SuperButton style={{
                    width: "100px",
                    fontSize: '10px',
                    marginLeft: '20px'
                }} onClick={checkAge}> check 18 </SuperButton>
            </div>

            <hr/>
            <hr/>
        </div>
    )
}

export default HW8
