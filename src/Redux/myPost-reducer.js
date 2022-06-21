import Card from "../Content/Card"


const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


const initialState = {
    MyPost: {
        posts: [
            {id: 1, message: 'dddddddddddd', likes: 0},
            {id: 2, message: 'bbbbbbbbb', likes: 2},
            {id: 3, message: 'aaaaaaaaaaa', likes: 3},
            {id: 4, message: 'ggggggggg', likes: 4},
        ],
        newPostText: 'hello',
        card: [
            <Card title="Hamburger" img="https://i.ibb.co/9nNq2BG/hamburger.jpg" weight="200" price="250"/>,
            <Card title="Cheeseburger" img="https://i.ibb.co/F4k7KR8/cheeseburger.jpg" weight="240" price="310"/>,
            <Card title="Big Mac" img="https://i.ibb.co/mSZyxd7/big-mac.jpg" weight="300" price="350"/>,
            <Card title="Run Tasty" img="https://i.ibb.co/7VtPjg8/run-tasty.jpg" weight="265" price="345"/>
            ],
    },
}

 const postReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'ADD-POST': {
            const newPost = {
                id: 6,
                message: state.MyPost.newPostText,
                likes: 0
            }
            let stateCopy = {...state}
            stateCopy.MyPost.posts = [...state.MyPost.posts]
            stateCopy.MyPost.posts.push(newPost)


        return stateCopy
    }

        case 'UPDATE-NEW-POST-TEXT': {
        let stateCopy = {...state}
        stateCopy.MyPost.newPostText = action.text

        return stateCopy
         }
        default: 
            return state
   
    }
}
export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => 
        ({type: UPDATE_NEW_POST_TEXT, text: text})

        


export default postReducer;