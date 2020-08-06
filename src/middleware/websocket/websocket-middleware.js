import { wsConnect, wsDisconnect } from "../../actions/websocket-action"
import { sendMessage, receiveMessage } from "../../actions/send-action";

export const websocketMiddleware = (store) => {
    let socket = null;

    return next => action => {

        switch(action.type) {
            case 'WS_CONNECT':
                console.log(action);

                if (socket !== null) {
                    socket.close();
                }
                
                console.log(action.room);
                socket = new WebSocket('ws://localhost:8090');
                socket.onopen = (event) => {};
                socket.onmessage = (event) => {
                    console.log(event);
                    store.dispatch(receiveMessage(event.data));
                    // socket.onclose = store.dispatch(wsDisconnect());
                }
                break;
            case 'WS_DISCONNECT':
                if (socket !== null) {
                    socket.close();
                }
                socket = null;
                break;
            case 'SEND_MESSAGE':
                const message  = {
                    "message": action.message,
                    "roomId": action.roomId,
                    "messageId": action.messageId,
                }
                socket.send(JSON.stringify(message));
                break;
            default:
                return next(action);
        }
    }
}

//export default websocketMiddleware();