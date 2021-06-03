import React, {useState} from "react";
import baseUrl from "./URL";
import NewPost from "./NewPost";
import EditPost from "./EditPost";
import './style/Post.css';

const Posts = ({posts, setPosts}) => {
    const [makingPost, setMakingPost] = useState(false);
    const [isEditing, setEditing] = useState(false);

    useState(() => {
        const fetchPosts = async () => {
            const response = await fetch(`${baseUrl}/posts`);
            const result = await response.json();
            console.log(result)
            setPosts(result.data.posts);
        };
        fetchPosts();
    }, []);
    
    const handleEdit = async ({target}) => {
        setEditing(true);
        const thisPost = target.parentNode
        const [title, body] = thisPost.children
        const postInfo = thisPost.children[2].children
        const [price, location, deliver] = postInfo;
    };

    return (
        <>  
            <h1>Posts</h1>
            <button onClick={() => {location.assign("/new")}}>New Post</button>
            {
                posts.map((post, idx) => { 
                    return (
                        <div key={"post"+idx}>
                            <h3 className="post-title">{post.title}</h3>
                            <p className="post-body">{post.description}</p>
                            <div>
                                <p className="post-price">{post.price}</p>
                                <p className="post-loc">{post.location}</p>
                                <p className="post-del">{`${post.willDeliver}`}</p>
                            </div>
                            {post.author.username === localStorage.getItem("user") ? <button onClick={handleEdit}>Edit</button> : null}
                        </div> );
                })
            }
            {/* {makingNew ? <NewPost makingPost={makingPost} setMakingPost={setMakingPost}/> : null} */}
            {isEditing ? <EditPost isEditing={isEditing} setEditing={setEditing} /> : null}
        </> 
    );
};

export default Posts;