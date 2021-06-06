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
    const [targetId, setTargetId] = useState("");

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

    const handleSearch = async (event) => {
        event.preventDefault();
        const searchText = event.target[0].value.toLowerCase();
        fetchPosts().then((result) => {
            const filteredPosts = result.filter( (post) => {
                return post.title.toLowerCase().includes(`${searchText}`) || post.description.toLowerCase().includes(`${searchText}`)
            });
            setPosts(filteredPosts);
        });
    };


    return (
        <>  
            <header id="post-hd">
                <h1>Buy Faster Sell Faster !</h1>
            </header>
            
            <form id="search-bar" onSubmit={handleSearch}>
                <label htmlFor="search-term">Search: </label>
                <input name="search-term" type="text" placeholder="search"/>
                <button type="submit" >Submit</button>
            </form>
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
                                {post.willDeliver ? <p className="post-del">Delivery Available</p> : null}
                            </div>
                            {post.isAuthor ? <button onClick={handleEdit}>Edit</button> : null}
                            {post.isAuthor ? <button onClick={handleDelete}>Delete</button> : null}
                        </div> );
                })
            }
            {isEditing ? <EditPost setEditing={setEditing} targetId={targetId} /> : null}
            {deleting ? <DeletePost setDeleting={setDeleting} targetId={targetId} /> : null}
        </>  );   
};

export default Posts;