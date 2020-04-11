import React from 'react'
import classNames from 'classnames';
import './message.scss';

export const Message = ({userId, message}) => {
    return(
        <div className={classNames('message', {isMine: userId === 'MINE'})}>
            {message}
        </div>
    )
}