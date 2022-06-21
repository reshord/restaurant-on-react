import Message from '../Dialogs/Message'
import React from 'react'


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
                <li>{props.dialogPage.dialogPage.messages.map(el => <Message key={el.id} el={el}/>)}</li>
                <div><textarea onChange={onNewMessageChange}
                               placeholder='Enter your message'
                               value={props.dialogPage.dialogPage.newMessageBody}>
                    </textarea>
                </div>
                <button onClick={ onSendMessageClick }>Send</button>
            </ul>
        </div>
    )
}

export default Dialogs;