import { Message } from "./message";
import React from 'react'
import './messageList.scss';

export const MessageList = ({messages}) => (
    <div className="messageList">
        {
            messages.map(message => 
                <Message 
                    key={message.messageId}
                    {...message}
                >
                </Message>
            )
        }
    </div>
)