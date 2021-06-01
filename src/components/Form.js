import React from "react";

const Form = () => {
  return (
    <>



    {/* Show the log-in screen on landing page, have a button at the bottom available to move to registration */}
      <form id="log-in"  onSubmit={(e) => {
          // register button
          // <h3>{}</h3>
          e.preventDefault()
          console.log(e.target[0].value)
          const userName = e.target[0].value
          const passWord = e.target[1].value
        
          // const response = fetch(BASE_URL,{
          //   method: "POST",
          //   headers: {
          //     'Content-Type': 'application/json'
          //   },
          //   body: JSON.stringify({
          //     user: {
          //       username: {userName},
          //       password:  {passWord}
          //     }
             
          //   })
            
          // }).then(response => response.json())
          //   .then(result => {
          //     console.log(result);
          //   })
          //   .catch(console.error);
           
          }}>
             
        <label  htmlFor="username">Username:</label>
        <input id="userName" type="text" placeholder="user-name" minLength={4} required/>

        <label htmlFor="password">Password:</label>
        <input type="password" placeholder="password" minLength={4} required/>
              
        {/* <button onClick={() => {
          // log-in button
        }}>Log-In</button> */}



        <button type="submit"
          
          
        >submit</button>

      

      </form>
    </> );
};

export default Form;