import React from 'react';
import './App.css';
import Sender from './container/sender';
import Conversation from './container/conversation';
import { User } from './container/user';

const App = () => (
  <div>
    <Conversation></Conversation>
    <Sender></Sender>
    <User></User>
  </div>
)

export default App;
