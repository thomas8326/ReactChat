import { Message } from "./message";
import React from 'react'

export const MessageList = ({messages}) => (
    <div class="messageList">
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