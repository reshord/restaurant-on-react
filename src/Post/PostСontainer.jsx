import React from 'react'
import Post from '../Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../Redux//myPost-reducer';



const MyPostsContainer = (props) => {
    let state = props.store.getState()
    const addPost = () => {
       props.store.dispatch(addPostActionCreator())
    }

    const postChange = (text) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action)
    }

    return <Post post={state.MyPost.MyPost.posts}
                 updateNewPostTextActionCreator={(text) => postChange(text)} 
                 addPost={addPost}
                 newPostText={state.MyPost.MyPost.newPostText}/>

}

export default MyPostsContainer;