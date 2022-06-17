const Post = (props) => {
    return (
        <div className="Post">
            <div className="ava"></div>
            <div>
                <div className="message">Your message: {props.el.message}</div>
                <div className="likes">Likes: {props.el.likes}</div>
            </div>
        </div>
    )
}

export default Post;