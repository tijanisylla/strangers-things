import React, {useState} from "react";
import baseUrl from "./URL";
import NewPost from "./NewPost";
import EditPost from "./EditPost";
import './style/Post.css';

const Posts = ({posts, setPosts}) => {
    const [makingPost, setMakingPost] = useState(false);
    const [isEditing, setEditing] = useState(false);
    const [targetId, setTargetId] = useState("")

    useState(() => {
        const fetchPosts = async () => {
            const response = await fetch(`${baseUrl}/posts`,
                localStorage.getItem("token") ? {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("token")}`
                    }
                } : null);
            const result = await response.json();
            console.log(result)
            setPosts(result.data.posts);
        };
        fetchPosts();
    }, []);
    
    const handleEdit = async (event) => {
        event.preventDefault();
        const thisPostId = event.target.parentElement.id;
        setEditing(true);
        setTargetId(thisPostId);
    };

    return (
        <>  
            <h1>Posts</h1>
            {
                localStorage.getItem("user") ? 
                <button onClick={ (event) => {event.preventDefault(); setMakingPost(true)}
                }>New Post</button>
                : null
            }
            {makingPost ? <NewPost setMakingPost={setMakingPost} /> : null}
            {
                posts.map((post, idx) => { 
                    return (
                        <div id={post._id} key={idx}>
                            <h3 className="post-title">{post.title}</h3>
                            <p className="post-body">{post.description}</p>
                            <div>
                                <p className="post-price">{post.price}</p>
                                <p className="post-loc">{post.location}</p>
                                <p className="post-del">{`${post.willDeliver}`}</p>
                            </div>
                            {post.isAuthor ? <button onClick={handleEdit}>Edit</button> : null}
                            {post.isAuthor ? <button onClick={handleEdit}>Delete</button> : null}
                        </div> );
                })
            }
            {isEditing ? <EditPost setEditing={setEditing} targetId={targetId} /> : null}
        </> );
};

export default Posts;