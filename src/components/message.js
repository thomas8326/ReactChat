import React from 'react'
import classNames from 'classnames';
import './message.scss';

export const Message = ({userId, message}) => {
    return(
        <div className={classNames('messagebox', {isMine: userId === 'MINE'})}>
            <span className="message">
                {message}
            </span>
        </div>
    )
}