import { connect } from "react-redux";
import { MessageList } from "../components/messageList";

const mapStateToProps = (state) => {
    console.log(state);
    return {
        messages: state.messages
    }
}


const Conversation = connect(mapStateToProps)(MessageList);

export default Conversation;