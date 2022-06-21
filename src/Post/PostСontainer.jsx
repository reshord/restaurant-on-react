import React from 'react'
import Post from '../Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../Redux//myPost-reducer';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        MyPost: state.MyPost,

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => dispatch(addPostActionCreator()),
         postChange: (text) => {
            let action = updateNewPostTextActionCreator(text)
            dispatch(action)
        }
    }
}

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Post)

export default PostContainer;