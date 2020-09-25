import React from "react";
import style from './ChatMessage.module.css';

interface ChatMessageProps {
    message: { sender: string; msg: string }
}

const ChatMessage = ({ message }: ChatMessageProps) => {
    return (
        <div className={style.ChatMessageContainer}>
            <span className={style.Sender}>{message.sender}</span>
            <span className={style.Msg}>{message.msg}</span>
        </div>
    )
}

export default ChatMessage;
