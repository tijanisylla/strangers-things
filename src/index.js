import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Footer, Form, Header, NewPost, Posts, Profile, Register } from './components';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [posts, setPosts] = useState([]);

  return  (
    <Router>

      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      
      <main>
        <Switch>
          <Route path="/login" render={ () => {return <Form loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} }/>
          <Route path="/new" render={ (props) => {return <NewPost loggedIn={loggedIn}/>} }/>
          <Route path="/posts" render={ (props) => {return <Posts posts={posts} setPosts={setPosts}/>} }/>
          <Route path="/profile" component={Profile} />
          <Route path="/register" render={ () => {return <Register loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} }/>
          <Route path="/" />
        </Switch>
      </main>

      <Footer />

    </Router> );
};

ReactDOM.render(<App />, document.getElementById('app'));
