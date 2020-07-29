import React from 'react';
import './App.css';
import Sender from './container/sender';
import Conversation from './container/conversation';
import { User } from './container/user';
import Rooms from './container/room';

const App = () => {
  return (
    <div className="chat">
      <Rooms className="room"></Rooms>
      <div className="conversation">
        <Conversation></Conversation>
        <Sender></Sender>
        <User></User>
      </div>
  </div>
  )
}

export default App;
