import {Link} from "react-router-dom"

const Header = () => {
    return (
        <header>
            <h1>Stranger's Things</h1>
            <div id="nav">
                <Link to="/">Home</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/" onClick={ (event) => {
                    event.preventDefault()

                    // Log the user out, then return to home menu

                    location.assign("/")
                }}>Log Out</Link>
            </div>
        </header>
    );
};

export default Header;