import {useState} from "react"
import baseUrl from "./URL"

const Profile = ({posts, setPosts}) => {
    const fetchPosts = async () => {
        const response = await fetch(`${baseUrl}/posts`,
            localStorage.getItem("token") ? {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            } : null);
        const result = await response.json();
        return result.data.posts;
    };

    useState(() => {
        fetchPosts().then((posts) => {setPosts(posts)});
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
        <div id="profile">
            <h2>Profile Page</h2>
            <h4>My Posts</h4>
            {
                posts.map( (post, idx) => {
                    if (post.isAuthor) {
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
                    } else {
                        return null
                    }
                })
            }
        </div> );
};

export default Profile;