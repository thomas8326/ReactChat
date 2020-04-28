import { connect } from "react-redux";
import React from 'react'
import { wsConnect } from "../actions/websocket-action";
import { Message } from "../components/message";
import './messageList.scss';


class MessageList extends React.Component {

    componentDidMount() {
        console.log('on');
        this.props.dispatch(wsConnect());
    }

    render() {
        return (
            <div className="messageList">
                {
                    this.props.messages.map(message => 
                        <Message 
                            key={message.messageId}
                            {...message}
                        >
                        </Message>
                    )
                }
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
}


const Conversation = connect(mapStateToProps)(MessageList);

export default Conversation;