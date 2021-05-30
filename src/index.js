import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Footer, Form, Header, Posts, Profile } from './components';

 const App = ()=> {
  return  (
    <Router>

      <Header />
      
      <main>
        <Switch>
          <Route path="/posts" component={Posts} />
          <Route path="/profile" component={Profile} />
          <Route path="/" component={Form} />
        </Switch>
      </main>

      <Footer />

    </Router> );
};

ReactDOM.render(<App />, document.getElementById('app'));
