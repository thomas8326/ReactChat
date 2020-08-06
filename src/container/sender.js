import { connect } from "react-redux";
import sendbox from "../components/sendbox";
import { sendMessage } from "../actions/send-action";

const mapStateToProps = (state) => {
    return {
        user: state.user,
        roomId: state.room.roomId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSendClick: (user, message, roomId) => dispatch(sendMessage(user.userId, message, roomId))
    }
}

const Sender = connect(mapStateToProps, mapDispatchToProps)(sendbox);

export default Sender;