import { connect } from "react-redux";
import sendbox from "../components/sendbox";
import { sendMessage } from "../actions/send-action";

const mapDispatchToProps = (dispatch) => {
    return {
        onSendClick: (message) => dispatch(sendMessage('MINE', message))
    }
}

const Sender = connect(null, mapDispatchToProps)(sendbox);

export default Sender;