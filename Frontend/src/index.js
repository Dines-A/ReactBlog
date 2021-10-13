import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import Blog from './Blog/Blog';
import  Profile  from './Profile/profile';
import Postform from './Blog/Form/form';
import { UserProvider } from './UserContext'


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

ReactDOM.render(
  <div className="overflow-hidden" >
      <BrowserRouter>
    <Switch>
      <UserProvider>
      <React.StrictMode>
            <Route exact path="/" component={App} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/profile" component={Profile} />
            <Route path="/blog/form" component={Postform}/>
            <Route exact path="/blog" component={Blog} />
      </React.StrictMode>
      </UserProvider>
    </Switch>
  </BrowserRouter>
    </div>
  ,
  document.getElementById('root')
);
