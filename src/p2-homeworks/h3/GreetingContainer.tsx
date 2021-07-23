import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (event: ChangeEvent<HTMLInputElement>) => {
        let newName = event.currentTarget.value.trim()
        if (newName) {
            setName(newName)
            setError('')
        } else {
            setName('')
            setError('invalid name format')
        }
    }
    const onKeyPressHandle = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && name) addUser()
    }
    const addUser = () => {
        addUserCallback(name)
        alert(`Hello  ${name}!`)
        setName('')
    }

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            onKeyPressHandle={onKeyPressHandle}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
