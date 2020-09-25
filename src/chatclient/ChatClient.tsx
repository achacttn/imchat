import React from "react";
// import WSHandler from './clientComponents/WSHandler';
import style from './ChatClient.module.css';
import ChatWindow from './clientComponents/ChatWindow';
import UserInputControls from './clientComponents/UserInputControls';

interface ChatClientProps {
    username: string;
}

interface MsgObject {
    sender: string;
    msg: string;
}


const ChatClient = ({ username }: ChatClientProps) => {

    const [messageList, setMessageList] = React.useState<MsgObject[]>([]);

    const socketUrl = `wss://m0v4iuwr09.execute-api.ap-southeast-2.amazonaws.com/dev1?username=${username}`;
    // let ws: WebSocket;
    let ws = React.useRef<WebSocket>();

    React.useEffect(() => {
        ws.current = new WebSocket(socketUrl);
        ws.current.onopen = event => {
            console.log('Opened connection: ', event);
        };
        ws.current.onclose = event => {
            console.log('Closed connection: ', event);
        };
        ws.current.onerror = event => {
            console.log('Error: ', event);
        };
        ws.current.onmessage = async event => {
            let parsed = JSON.parse(event.data)
            setMessageList(messageList => [...messageList, parsed]);
        };
    }, []);

    const sendToSocket = (text: string) => {
        if (ws && ws.current) {
            ws.current.send(JSON.stringify({
                action: "sendmessage",
                data: text
            }));
        }
    }

    return (
        <div className={style.ClientContainer}>
            {/* <WSHandler username={username} /> */}
            <div className={style.ClientFlexContainer}>
                {/* <div className={style.ChatAndUserContainer}> */}
                <div className={style.ClientChatContainer}>
                    <ChatWindow messages={messageList} />
                </div>
                {/* <div className={style.ClientUserListContainer}>
                        Users
                        {username}
                    </div> */}
                {/* </div> */}
                <div className={style.ClientInputContainer}>
                    <UserInputControls sendHandler={sendToSocket} />
                </div>
            </div>
        </div>
    )
}

export default ChatClient;
