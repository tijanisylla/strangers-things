import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Footer, Form, Header, NewPost, Posts, Profile, Register } from './components';

const App = () => {
  const [posts, setPosts] = useState([]);

  return  (
    <Router>

      <Header/>
      
      <main>
        <Switch>
          <Route path="/login" component={Form} />
          <Route path="/new" component={NewPost} />
          <Route path="/posts" render={ () => {return <Posts posts={posts} setPosts={setPosts}/>} }/>
          <Route path="/profile" component={Profile} />
          <Route path="/register" component={Register} />
          <Route path="/" />
        </Switch>
      </main>

      <Footer />

    </Router> );
};

ReactDOM.render(<App />, document.getElementById('app'));
