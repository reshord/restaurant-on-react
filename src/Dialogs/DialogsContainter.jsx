import Dialogs from './Dialogs';
import { updateNewMessageBodyCreator, sendMessage } from '../Redux/dialogPage-reducer';


const DialogsContainer = (props) => {
    const state = props.store.getState().dialogPage
    const newMessageBody = props.newMessageBody

    const onSendMessageClick = () => {

        props.store.dispatch(sendMessage())
        newMessageBody = ''
        
    }
    const onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }
    
    return <Dialogs onSendMessageClick={onSendMessageClick} 
                    onNewMessageChange={onNewMessageChange} 
                    store={props.store} 
                    newMessageBody={newMessageBody}
                    message={props.message}/>
}

export default DialogsContainer;