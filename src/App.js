import React from 'react';
import './App.css';
import Sender from './container/sender';
import Conversation from './container/conversation';

const App = () => (
  <div>
    <Conversation></Conversation>
    <Sender></Sender>
  </div>
)

export default App;
