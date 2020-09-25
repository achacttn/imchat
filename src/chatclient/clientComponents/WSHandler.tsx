import React from "react";

interface WSHandlerProps {
    username: string;
}

const WSHandler = ({ username }: WSHandlerProps) => {

    // React.useEffect(() => {
    //     console.log('=== WSHandler.tsx ===');
    //     console.log('Received username props: ', username);
    // })
    // React.useEffect(() => {
    //     console.log('=== WSHandler.tsx ===');
    //     let ws = new WebSocket(`wss://m0v4iuwr09.execute-api.ap-southeast-2.amazonaws.com/dev1?username=${username}`);
    //     ws.onopen = event => {
    //         console.log('Websocket open event: ', event);
    //     };
    //     ws.onclose = event => {
    //         console.log('Webosocket close event: ', event);
    //     };
    //     ws.onerror = event => {
    //         console.log('Websocket error: ', event);
    //     };
    //     ws.onmessage = event => {
    //         console.log('Websocket message: ', event);
    //     };
    // }, [])

    return null;
}

export default WSHandler;
