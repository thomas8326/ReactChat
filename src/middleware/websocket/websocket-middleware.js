import { wsConnect, wsDisconnect } from "../../actions/websocket-action"
import { sendMessage } from "../../actions/send-action";

export const websocketMiddleware = (store) => {
    let socket = null;

    return next => action => {

        switch(action.type) {
            case 'WS_CONNECT':
                if (socket !== null) {
                    socket.close();
                }
                
                socket = new WebSocket('ws://127.0.0.1:8080/');

                socket.onopen = (event) => {
                    console.log('open')
                    console.log(event);
                };
                socket.onmessage = (event) => {
                    console.log('getMessage')
                    console.log(event)};
                // socket.onclose = store.dispatch(wsDisconnect());
                break;
            case 'WS_DISCONNECT':
                if (socket !== null) {
                    socket.close();
                }
                socket = null;
                break;
            case 'SEND_MESSAGE':
                socket.send(action.message);
                break;
            default:
                return next(action);
        }
    }
}

//export default websocketMiddleware();