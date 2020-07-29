import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import Video from './pages/register/Video';
import Category from './pages/register/Category';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

const Page404 = () => (<div>Página 404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/register/video" component={Video} exact />
      <Route path="/register/category" component={Category} exact />
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
