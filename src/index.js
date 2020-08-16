import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Home from './pages/Home'
import Page404 from './pages/404'
import Video from './pages/register/Video'
import Category from './pages/register/Category'
import Login from './pages/Login'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/register/video" component={Video} exact />
      <Route path="/register/category" component={Category} exact />
      <Route path="/home" component={Home} exact />
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)
