import React from 'react';
import './App.css';
import Rooms from './container/room';
import { wsConnect, wsDisconnect } from "./actions/websocket-action";
import { connect } from "react-redux";

class AppContainer extends React.Component {

  constructor(props) {
    super(props);
    props.dispatch(wsConnect())
  }

  componentDidMount() {
    window.addEventListener('beforeunload', () => {
      console.log('beforeunload');
      this.props.dispatch(wsDisconnect());
    });
  }

  componentWillUnmount() {
    window.removeEventListener("beforeunload");
  }


  render() {
    return (
      <Rooms className="room"></Rooms>
    )
  }
}

const App = connect()(AppContainer);

export default App;
