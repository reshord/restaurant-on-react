import React from 'react'
import MyPost from '../MyPost/MyPost';





const MyPosts = (props) => {
    const checkValue = React.createRef()
    const addPost = () => {
        const text = checkValue.current.value
        props.addPost(text)
        checkValue.current.value = ''
    }

    const postChange = () => {
        const text = checkValue.current.value
        props.updateNewPostTextActionCreator(text)

    }
    return (
        <div className="MyPost">
            <h1>My posts</h1>
            <div>
                <div>
                    <input onChange={postChange} 
                           value={props.newPostText} 
                           ref={checkValue} 
                           type="text" />
                </div>
                <div>
                    <button onClick={() => addPost()}>Add post</button>
                </div>
            </div>
            <div className='post'>
                {props.post.map(el => <MyPost el={el}/>)}
            </div>
        </div>
    )
}

export default MyPosts;