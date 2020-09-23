import { receiveMessage } from "../../actions/send-action";

export const websocketMiddleware = (store) => {
    let socket = null;

    return next => action => {

        switch (action.type) {
            case 'WS_CONNECT':

                if (socket !== null) {
                    socket.close();
                }

                socket = new WebSocket('ws://localhost:8090');
                socket.onopen = (event) => { };
                socket.onmessage = (event) => {
                    store.dispatch(receiveMessage(event.data));
                    // socket.onclose = store.dispatch(wsDisconnect());
                }
                break;
            case 'WS_DISCONNECT':

                console.log(socket);
                if (socket !== null) {
                    socket.close();
                }
                socket = null;
                break;
            case 'SEND_MESSAGE':
                const message = {
                    "content": action.message,
                    "roomId": action.roomId,
                    "senderMsgId": action.messageId,
                }
                socket.send(JSON.stringify(message));
                break;
            default:
                return next(action);
        }
    }
}

//export default websocketMiddleware();