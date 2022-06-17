import Message from '../Dialogs/Message'


const Dialogs = (props) => {


    const onSendMessageClick = () => {

        props.onSendMessageClick()
        
    }
    const onNewMessageChange = (e) => {
        const body = e.target.value

        props.onNewMessageChange(body)
    }

    return (
        <div className="dialogs">
            <ul>
                <li>{props.message.map(el => <Message el={el}/>)}</li>
                <div><textarea onChange={onNewMessageChange}
                               value={props.newMessageBody}
                               placeholder='Enter your message'>
                    </textarea>
                </div>
                <button onClick={ onSendMessageClick }>Send</button>
            </ul>
        </div>
    )
}

export default Dialogs;