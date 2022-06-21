import Dialogs from './Dialogs';
import { updateNewMessageBodyCreator, sendMessage } from '../Redux/dialogPage-reducer';
import { connect } from 'react-redux';



const mapStateToProps = (state) => {
   return {
      dialogPage: state.dialogPage
   }
}
const mapDispatchToProps = (dispatch) => {

   return {

      onSendMessageClick: () => dispatch(sendMessage()),

      onNewMessageChange: (body) => {
         dispatch(updateNewMessageBodyCreator(body))
      }

   }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer;