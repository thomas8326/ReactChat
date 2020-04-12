import { connect } from "react-redux";
import sendbox from "../components/sendbox";
import { sendMessage } from "../actions/send-action";

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSendClick: (user, message) => dispatch(sendMessage(user.userId, message))
    }
}

const Sender = connect(mapStateToProps, mapDispatchToProps)(sendbox);

export default Sender;