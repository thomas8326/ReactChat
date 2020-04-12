import { combineReducers } from "redux";
import { messages } from "./send-reducer";
import { user } from "./user-reducer";

export const storage = combineReducers({
    messages: messages,
    user: user
})