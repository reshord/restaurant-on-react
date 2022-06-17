const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

const initialState = {
    dialogPage: {
        messages: [
            {id: 1, message: 'hello'},
            {id: 2, message: 'hi'},
            {id: 3, message: 'how are you?'},
        ],
        newMessageBody: ''
    }
}

const dialogReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            state.dialogPage.newMessageBody = action.body
            return state
        case 'SEND-MESSAGE': 
            let body = state.dialogPage.newMessageBody
            state.dialogPage.newMessageBody = '';
            
            state.dialogPage.messages.push({id: 4, message: body})
            return state

        default: 
                return state
    }
   

    
    return state
}
export const sendMessage = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (body) => 

        ({type: UPDATE_NEW_MESSAGE_BODY, body: body})



export default dialogReducer