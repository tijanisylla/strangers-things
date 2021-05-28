import React from 'react'

 const Form = () => {
    return (
        <div>

          
            <form>
           
           <label for="username">Username:</label>

                <input type="text"  placeholder="user-name" required/>

                <label for="password">password:</label>

                <input type="password" placeholder="password" required/>


                <label for="password">confirm-password:</label>
                <input type="password" placeholder="confirm-password" required/>

                
                <input type="submit"/>
            </form>
        </div>
    )
}


export default Form 