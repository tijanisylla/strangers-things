import React, {useState} from "react";
import baseUrl from "./URL";
import NewPost from "./NewPost";
import EditPost from "./EditPost";
import DeletePost from "./DeletePost";
import './style/Style.css';

const Posts = ({posts, setPosts}) => {
   
    const [makingPost, setMakingPost] = useState(false);
    const [isEditing, setEditing] = useState(false);
    const [deleting, setDeleting] = useState(false);
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

    const handleDelete = async (event) => {
        event.preventDefault();
        const thisPostId = event.target.parentElement.id;
        setTargetId(thisPostId);
        setDeleting(true);
    };

    return (
        <>  
        <header id="post-hd">
            <h1>Buy Faster Sell Faster !</h1>
            </header>
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
                        <div className="post-item" id={post._id} key={idx}>
                            <div className="card">
                            <h3 className="post-title">{post.title}</h3>
                            <p className="post-body">{post.description}</p>
                            </div>
                            <div className="post-info"> 
                                <p className="post-price">Price:{post.price}</p>
                                <p className="post-loc">
                                    <img id="location" src="https://i.pinimg.com/474x/cb/17/c6/cb17c606f41f47aa505e6d203df8716d.jpg"/>
                                    {post.location}</p>
                                <p className="post-del">{`${post.willDeliver}`}</p>
                            </div>
                            {post.isAuthor ? <button onClick={handleEdit}>Edit</button> : null}
                            {post.isAuthor ? <button onClick={handleDelete}>Delete</button> : null}
                        </div> );
                })
            }
            {isEditing ? <EditPost setEditing={setEditing} targetId={targetId} /> : null}
            {deleting ? <DeletePost setDeleting={setDeleting} targetId={targetId} /> : null}

           
        </> 
        );
        
};

export default Posts;