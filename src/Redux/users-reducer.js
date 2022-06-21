
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

const initialState = {

        users: [
            {id: 1, photoUrl: 'https://i.ibb.co/1XZ96Bd/image.jpg', followed: false, fullName: 'Dmitriy', status: 'I am a boss', location: {city: 'Kiyv', country: 'Ukraine'}},
            {id: 2, photoUrl: 'https://i.ibb.co/1XZ96Bd/image.jpg', followed: false, fullName: 'Sergey', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
            {id: 3, photoUrl: 'https://i.ibb.co/1XZ96Bd/image.jpg', followed: false, fullName: 'Oleg', status: 'I am a boss', location: {city: 'New York', country: 'USA'}},
            {id: 4, photoUrl:  'https://i.ibb.co/1XZ96Bd/image.jpg', followed: false, fullName: 'Ivan', status: 'I am a boss', location: {city: 'Washington', country: 'United Kingdom'}},
        ]
}

 const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
           return {
                ...state, 
                users: state.users.map(user => {
                    if(user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                }) 
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }

        default: 
            return state
   
    }
}
export const followAC = (userId) => ({type: FOLLOW, userId})

export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})

export const setUsersAC = (users) => ({type: SET_USERS, users})


        


export default usersReducer;