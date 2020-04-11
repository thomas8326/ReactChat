import { Message } from "./message";
import React from 'react'

export const MessageList = (state) => (
    <div>
        {console.log(state)}
        {
            
            state.messages.map(message => 
                <Message 
                    key={message.messageId}
                    {...message}
                >
                </Message>
            )
        }
    </div>
)