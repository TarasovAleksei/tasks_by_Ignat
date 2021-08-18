import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import styles from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const time: number = +setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(time)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = date?.toLocaleTimeString()
    const stringDate = date?.toLocaleDateString()

    return (
        <div>
            <div className={styles.bookacket}>
                <div className={styles.uncomenkad}>
                    <div className={styles.vemekunys} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        {stringTime}
                        {show && (<div className={styles.forDate}>{stringDate}</div>)}
                    </div>
                </div>
            </div>

            <SuperButton style={{
                width: "90px",
                fontSize: '10px',
                marginTop: '10px',
                cursor: "pointer"
            }} onClick={start}>start</SuperButton>
            <SuperButton style={{
                width: "90px",
                fontSize: '10px',
                marginTop: '10px',
                marginLeft: '37px',
                cursor: "pointer"
            }} onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
