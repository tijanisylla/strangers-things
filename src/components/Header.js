import { Link } from "react-router-dom"

const Header = () => {
    function logOutHandler(event) {
        event.preventDefault()
        localStorage.removeItem("token")
        location.assign("/")
    };
    
    return (
        <header>
            <h1>Stranger's Things</h1>
            <div id="nav">
                {   
                    !localStorage.getItem("token") ? 
                    <Link id="login" to="/login">Log In</Link> 
                    : null
                }
                <Link to="/posts">Posts</Link>
                <Link to="/profile">Profile</Link>
                {
                    localStorage.getItem("token") ? 
                    <Link id="logout" to="/" onClick={logOutHandler}>Log Out</Link>
                    : null
                }
            </div>
        </header> );
};

export default Header;