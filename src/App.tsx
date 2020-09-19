import React from 'react';
import './App.css';
import Prompt from './prompt/Prompt'
import ChatClient from './chatclient/ChatClient'

export default () => {

    const [usernameSubmitted] = React.useState<Boolean>(false)

    return (
        <div className="AppContainer">
            {usernameSubmitted ? <ChatClient /> : <Prompt />}
        </div>
    );
};
