import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Footer, Form, Header, Posts, Profile, Register } from './components';

 const App = () => {
  const [loggedIn, setLoggedIn] = useState(false)


  return  (
    <Router>

      <Header />
      
      <main>
        <Switch>
          <Route path="/login" render={(props) => {return <Form {...props} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/> }}/>
          <Route path="/posts" component={Posts} />
          <Route path="/profile" component={Profile} />
          <Route path="/register" component={Register} />
          <Route path="/" />
        </Switch>
      </main>

      <Footer />

    </Router> );
};

ReactDOM.render(<App />, document.getElementById('app'));
