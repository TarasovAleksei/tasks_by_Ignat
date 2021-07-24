import React from 'react'
import Message from "./Message";
import {MessagePropsType} from './Message'

const messageData:MessagePropsType = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Alex',
    message: 'npm start нажимал?',
    time: '22:00',
}

const HW1 = () => {
    return (
        <div>
            <hr/>
            homeworks 1
            <hr/>
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
