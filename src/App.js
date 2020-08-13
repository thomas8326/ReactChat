import React from 'react';
import './App.css';
import Rooms from './container/room';
import { wsConnect } from "./actions/websocket-action";
import { connect } from "react-redux";

class AppContainer extends React.Component {

  constructor(props) {
    super(props);
    props.dispatch(wsConnect());
  }

  render(){
    return (
        <Rooms className="room"></Rooms>
      )
    }
}

const App = connect()(AppContainer);

export default App;
