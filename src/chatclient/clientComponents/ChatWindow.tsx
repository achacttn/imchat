import React from "react";
import style from './ChatWindow.module.css';
import ChatMessage from './ChatMessage';

interface MsgObject {
    sender: string;
    msg: string;
}

interface ChatWindowProps {
    messages: MsgObject[];
}

const ChatWindow = ({ messages }: ChatWindowProps) => {

    return (
        <div className={style.ChatWindowContainer}>
            <div className={style.ChatWindowContent}>
                {messages.map((message, i) => <ChatMessage message={message} key={i} />)}
            </div>
        </div>
    )
};

export default ChatWindow;
