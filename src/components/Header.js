import { Link } from "react-router-dom"

const Header = () => {
    function logOutHandler(event) {
        event.preventDefault()
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        location.assign("/")
        console.log("test")
    };
    
    return (
        <header>
            <h1>Stranger's Things</h1>
            <div id="nav">
                {   
                    !localStorage.getItem("user") ? 
                    <Link id="login" to="/login">Log In</Link> 
                    : null
                }
                <Link to="/posts">Posts</Link>
                {/* <Link to="/profile">Profile</Link> */}
                {   
                    localStorage.getItem("user") ? 
                    <Link to="/" onClick={(event) => {logOutHandler(event)}}>Log Out</Link> 
                    : null
                }
            </div>
        </header> );
};

export default Header;