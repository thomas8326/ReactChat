import { connect } from "react-redux";
import React from 'react'
import { changeUser } from "../actions/user-action";

const otherUser = {
    userId: 'OTHER',
    firstName: '陳',
    lastName: '彥如'
}

const mine = {
    userId: 'MINE',
    firstName: '施',
    lastName: '宏儒'
}



const UserToggle = ({dispatch}) => {
    return(
        <div>
            <button onClick={() => dispatch(changeUser(otherUser))}>Other User</button>
            <button onClick={() => dispatch(changeUser(mine))}>Mine</button>
        </div>
    )
}

export const User = connect()(UserToggle)