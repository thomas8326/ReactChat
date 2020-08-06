import { connect } from "react-redux";
import React from 'react'
import './room.scss';
import Sender from './sender';
import Conversation from './conversation'
import { User } from './user';
import { openRoom } from './../actions/room-action';


class Room extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            rooms: ['room1', 'room2', 'room3'],
        }
    }

    openRoom(roomId) {
        this.props.dispatch(openRoom(roomId));
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
                <div className="conversation">
                    <Conversation roomId ={ this.state.roomId }></Conversation>
                    <Sender></Sender>
                    <User></User>
                </div>
            </div>
        )
    }
}

const Rooms = connect()(Room);

export default Rooms;