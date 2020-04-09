import React from 'react';
import PropTypes from 'prop-types';
import './sendbox.scss';

export const sendbox = ({ active, children, onClick }) => {
    return (
        <div class="sender">
            <button class="uploadImage"></button>
            <div class="messageBox">
                <div contentEditable="true" class="send"></div>
                <button
                    class="enter"
                    onClick={() => onClick()}
                    onKeyUp={(e) => { if (e.keyCode === 13) onClick() }}
                >></button>
            </div>
        </div>
    );
}

sendbox.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default sendbox;