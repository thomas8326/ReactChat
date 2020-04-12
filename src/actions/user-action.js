import { TOGGLE_USER } from "../constants/user-constants"

export const changeUser = (user) => {
    return {
        userId: user.userId, // temp
        firstName: user.firstName,
        lastName: user.lastName,
        type: TOGGLE_USER
    }
}