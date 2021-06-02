import baseUrl from "./URL"

const EditPost = ({setEditing}) => {

    useState(() => {
        const fetchPosts = async () => {
            const response = await fetch(`${baseUrl}/posts`);
            const result = await response.json();
            console.log(result)
        };
        fetchPosts();
    }, []);

    const handleSubmit = async (event) => {
        // event.preventDefault()
        // const {target} = event;

        // const title = target[0].value;
        // const description = target[1].value;
        // const price = target[2].value;
        // const itemLocation = target[3].value;
        // const willDeliverItem = target[4].checked;

        // fetch(`${baseUrl}/posts`, {
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': `Bearer ${localStorage.getItem(user.token)}`
        //     },
        //     body: JSON.stringify({
        //         post: {
        //             title: `${title}`,
        //             description: `${description}`,
        //             price: `${price}`,
        //             location: itemLocation ? `${itemLocation}` : "[On Request]",
        //             willDeliver: `${willDeliverItem}`
        //         }
        //     })
        // }).then(response => response.json())
        //     .then(result => {
        //         console.log(result);
        //     })
        //     .catch(console.error);
        
        setEditing(false)
    }
    
    return (
            <form onSubmit={handleSubmit}>

                <label htmlFor="post-name">Title:</label>
                <input id="post-name" type="text" />

                <label htmlFor="post-body">Body:</label>
                <input id="post-body" type="text" />

                <label htmlFor="post-cost">Asking Price:</label>
                <input id="post-cost" type="text" />

                <label htmlFor="post-loc">Location:</label>
                <input id="post-loc" type="text" />

                <label htmlFor="post-del">Delivery Available:</label>
                <input id="post-del" type="checkbox"></input>

                <button type="submit">Submit</button>

            </form> );
};

export default EditPost