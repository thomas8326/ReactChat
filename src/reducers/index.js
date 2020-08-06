import { combineReducers } from "redux";
import { messages } from "./send-reducer";
import { user } from "./user-reducer";
import { room } from "./room-reducer";

export const storage = combineReducers({
    messages: messages,
    user: user,
    room: room
})