import { combineReducers } from "redux";
import { messages } from "./send-reducer";

export const storage = combineReducers({
    message: messages,
})