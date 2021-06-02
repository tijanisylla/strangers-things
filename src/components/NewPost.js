const NewPost = ({loggedIn}) => {
    
    const handleSubmit = async (event) => {
        event.preventDefault()

        fetch('https://strangers-things.herokuapp.com/api/COHORT-NAME/posts', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer TOKEN_STRING_HERE'
            },
            body: JSON.stringify({
                post: {
                    title: "My favorite stuffed animal",
                    description: "This is a pooh doll from 1973. It has been carefully taken care of since I first got it.",
                    price: "$480.00",
                    willDeliver: true
                }
            })
        }).then(response => response.json())
            .then(result => {
                console.log(result);
            })
            .catch(console.error);
    }
    
    if (localStorage.getItem("token")) {
        return (
            <form >

                <label htmlFor="post-name">Title:</label>
                <input id="post-name" type="text" placeholder="item for sale" required/>

                <label htmlFor="post-body">Body:</label>
                <input id="post-body" type="text" placeholder="item description" required />

                <label htmlFor="post-cost">Asking Price:</label>
                <input id="post-cost" type="text" placeholder="$0.00" required />

                <label htmlFor="post-name">Title:</label>
                <input id="post-loc" type="text" placeholder="item location" required />

                <label htmlFor="post-del">Delivery Available:</label>
                <input id="post-del" type="checkbox"></input>

            </form>)
    } else {
        location.assign("/")
    };
};

export default NewPost