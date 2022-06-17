const Message = (props) => {
    return (
        <div className="message"> 
            <div className="message-text">{props.el.message}</div>
        </div>
    )
}

export default Message;