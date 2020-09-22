import React from "react";
import WSHandler from './clientComponents/WSHandler';
import style from './ChatClient.module.css';

interface ChatClientProps {
    username: string;
}

const ChatClient = ({ username }: ChatClientProps) => {

    return (
        <div className={style.ClientContainer}>
            <WSHandler />
            <div className={style.ClientFlexContainer}>
                <div className={style.ChatAndUserContainer}>
                    <div className={style.ClientChatContainer}>
                        Chat
                    </div>
                    <div className={style.ClientUserListContainer}>
                        Users
                        {username}
                    </div>
                </div>
                <div className={style.ClientInputContainer}>
                    Input
                </div>
            </div>
        </div>
    )
}

export default ChatClient;
