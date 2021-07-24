import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";

// types
export type UserType = {
    _id: string
    name: string
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<UserType[]>([])
    console.log(users)
    const addUserCallback = (name: string) => {
        let newUser: UserType = {
            _id: v1(),
            name: name
        }
        let newUsers: UserType[] = [...users, newUser]
        setUsers(newUsers)
    }
    return (
        <div>
            <hr/>
            homeworks 3
            <hr/>
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>
            <hr/>
            <hr/>
        </div>
    )
}

export default HW3
