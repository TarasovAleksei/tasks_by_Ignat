import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void
    onKeyPressHandle: (event: KeyboardEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}

const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressHandle}
) => {
    const inputClass = error? s.error : s.notError

    return (
        <div>
            <input value={name} onChange={setNameCallback} onKeyPress={onKeyPressHandle} className={inputClass}/>
            <button className={s.btn} onClick={addUser} disabled={!name}>add</button>
            <span className={s.total}>{totalUsers}</span>
            <div className={s.errorMessage}>{error}</div>
        </div>
    )
}

export default Greeting
