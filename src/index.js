import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { EditPost, Footer, Form, Header, Posts, Profile, Register } from './components';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  return  (
    <Router>

      <Header posts={posts} setPosts={setPosts}/>
      
      <main>
        <Switch>
          <Route path="/posts" render={ () => {
            return <Posts posts={posts} setPosts={setPosts}
                          searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>} }/>
          <Route path="/profile" component={Profile} />
          <Route path="/register" component={Register} />
          <Route path="/" component={Form} />
        </Switch>
      </main>

      <Footer />

    </Router> );
};

ReactDOM.render(<App />, document.getElementById('app'));
