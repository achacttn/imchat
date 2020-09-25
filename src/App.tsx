import React from 'react';
import './App.css';
import Prompt from './prompt/Prompt'
import ChatClient from './chatclient/ChatClient'

// const usernameStore = {
//     username: 0,
// }

// interface usernameReducerProps {
//     usernameStore: Object,
//     action: Object,
// }

// const usernameReducer = (usernameStore, action) => {
//     switch (action.type) {
//         case "SET_USERNAME":
//             return { username: action.username };
//         default:
//             throw new Error("Action is not SET_USERNAME");
//     }
// }

export default () => {

    // const [usernameState, usernameDispatch] = React.useReducer(usernameReducer, usernameStore);
    // prod: set username back to "" and submit state back to false
    // const [username, setUsername] = React.useState<string>("Scott");
    const [username, setUsername] = React.useState<string>("");
    const [usernameSubmitted, setUsernameSubmitted] = React.useState<boolean>(false);

    const usernameSubmitHandler: () => void = () => {
        setUsernameSubmitted(true)
    };

    return (
        <div className="AppContainer">
            {usernameSubmitted ? <ChatClient username={username} /> : <Prompt usernameHandler={setUsername} submitHandler={usernameSubmitHandler} />}
        </div>
    );
};
