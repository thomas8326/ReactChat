import React from 'react';
import PropTypes from 'prop-types';
import './sendbox.scss';

export const sendbox = ({ onSendClick, user, roomId }) => {
    let message = '';

    return (
        <div className="sender">
            <button className="uploadImage"></button>
            <div className="messageBox">
                <div 
                    contentEditable="true" 
                    className="send" 
                    ref={e => message = e }
                ></div>
                <button
                    className="enter"
                    onClick={() => {
                        onSendClick(user, message.innerText, roomId);
                        message.innerText = '';
                    }}
                >></button>
            </div>
        </div>
    );
}

sendbox.propTypes = {
    onSendClick: PropTypes.func.isRequired
}

export default sendbox;