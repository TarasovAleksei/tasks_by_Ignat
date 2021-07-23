import React from 'react'
import classes from './Message.module.css'

export type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}
const Message = (props: MessagePropsType) => (
    <div className={classes.wrapper}>
        <img src={props.avatar} alt="avatar"/>
        <div className={classes.container}>
            <div className={classes.name}>{props.name}</div>
            <div className={classes.messageAndTime}>
                <div className={classes.message}>{props.message}</div>
                <div className={classes.time}> {props.time}</div>
            </div>
        </div>
    </div>
);

export default Message
