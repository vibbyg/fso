import './../../src/index.css';

const Notification = ({ success, message }) => {
    if (message === null) {
        return null;
    }
    return (
        <div className="notification" style={success ? {color: "green"} : {color: "red"}}>
            {message}
        </div>
    )
}

export default Notification;