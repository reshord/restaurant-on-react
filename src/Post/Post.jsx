import React from 'react'
import MyPost from '../MyPost/MyPost';





const MyPosts = (props) => {
    const myPost = props.MyPost.MyPost
    const checkValue = React.createRef()

    const addPost = () => {
        const text = checkValue.current.value
        props.addPost(text)

    }

    const postChange = () => {
        const text = checkValue.current.value
        props.postChange(text)

    }
    return (
        <div className="MyPost">
            <h1>My posts</h1>
            <div>
                <div>
                    <input onChange={postChange} 
                           value={myPost.newPostText} 
                           ref={checkValue} 
                           type="text" />
                </div>
                <div>
                    <button onClick={() => addPost()}>Add post</button>
                </div>
            </div>
            <div className='post'>
                {myPost.posts.map(el => <MyPost el={el}/>)}
            </div>
        </div>
    )
}

export default MyPosts;