import React from 'react';
import './App.css';
import Prompt from './prompt/Prompt'
import ChatClient from './chatclient/ChatClient'

export default () => {

    // prod: set username back to "" and submit state back to false
    const [username, setUsername] = React.useState<string>("Scott");
    const [usernameSubmitted, setUsernameSubmitted] = React.useState<boolean>(true);

    const usernameSubmitHandler: () => void = () => {
        setUsernameSubmitted(true)
    };

    return (
        <div className="AppContainer">
            {usernameSubmitted ? <ChatClient username={username} /> : <Prompt usernameHandler={setUsername} submitHandler={usernameSubmitHandler} />}
        </div>
    );
};
