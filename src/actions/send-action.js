import { SEND_MESSAGE, SEND_FILE, SEND_IMAGE } from "../constants/action-constants"
import { v4 as uuidv4 } from 'uuid'; 

export const sendMessage = (userId, text) => {
    return {
        userId: userId,
        messageId: uuidv4(),
        type: SEND_MESSAGE,
        message: text
    }
}

export const sendFile = (userId, file) => {
    return {
        userId: userId,
        messageId: uuidv4(),
        type: SEND_FILE,
        file: file
    }
}

export const sendImage = (userId, file) => {
    return {
        userId: userId,
        messageId: uuidv4(),
        type: SEND_IMAGE,
        file: file
    }
}


