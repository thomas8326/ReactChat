import { SEND_MESSAGE, SEND_FILE, SEND_IMAGE } from "../constants/action-constants";

export const sendReducer = (message = {}, action) => {
    switch(action.type) {
        case SEND_MESSAGE:
            return {
                userId: action.userId,
                messageId: action.messageId,
                message: action.message
            }
        case SEND_FILE:
        case SEND_IMAGE:
            return {
                userId: action.userId,
                messageId: action.messageId,
                message: action.file
            }
        default:
            return message;
    }
}

export default sendReducer;