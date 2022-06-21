const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

const initialState = {
    dialogPage: {
        messages: [
            {id: 1, message: 'dfgdfg'},
            {id: 2, message: 'dfgfg'},
            {id: 3, message: 'dfgdfg'},
        ],
        newMessageBody: ''
    }
}

const dialogReducer = (state = initialState, action) => {
    let stateCopy

    switch(action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY': 

            stateCopy = {
                ...state, 
                dialogPage: {...state.dialogPage}
            }
            stateCopy.dialogPage.newMessageBody = action.body


            return stateCopy
        
        case 'SEND-MESSAGE': 

            stateCopy = {
                ...state,
                dialogPage: {...state.dialogPage},
            }
            const body = stateCopy.dialogPage.newMessageBody
            stateCopy.dialogPage.messages = [...state.dialogPage.messages, {id: Math.round(Math.random() * 100), message: body}]
            stateCopy.dialogPage.newMessageBody = ''
            console.log(state);
            return stateCopy

        default: 
                return state
    }
   

    
    return state
}
export const sendMessage = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (body) => 

        ({type: UPDATE_NEW_MESSAGE_BODY, body: body})



export default dialogReducer