import React from "react";

interface ChatClientProps {
    username: string;
}

const ChatClient = ({ username }: ChatClientProps) => {
    return (
        <div>
            {username}
        </div>
    )
}

export default ChatClient;
