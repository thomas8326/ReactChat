import { connect } from "react-redux";
import React from 'react'
import './room.scss';
import Sender from './sender';
import Conversation from './conversation'
import { openRoom } from './../actions/room-action';


class Room extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: ['room1', 'room2', 'room3'],
            currentRoom: '',
        }
    }

    openRoom(roomId) {
        this.props.dispatch(openRoom(roomId));
        this.setState({ currentRoom: roomId });
    }

    showConversation() {
        return (
            <div className="conversation">
                <Conversation roomId={this.state.roomId}></Conversation>
                <Sender></Sender>
            </div>)
    }

    showEmptyRoom() {
        return (
            <div className="empty">
                Please select a room
            </div>
        )
    }

    render() {
        return (
            <div className="room-container">
                <div className="room-list">
                    {
                        this.state.rooms.map((room, index) =>
                            <div className="room" key={index} onClick={() => this.openRoom(room)}>{room}</div>
                        )
                    }
                </div>
                {this.state.currentRoom ? this.showConversation() : this.showEmptyRoom()}
            </div>
        )
    }
}

const Rooms = connect()(Room);

export default Rooms;