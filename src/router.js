import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from './components/home/Home';
import Login from './components/login/Login'
import Search from './components/search/Search'
import Upload from './components/upload/Upload'
import Searchhistory from './components/searchhistory/Searchhistory'
import About from './components/about/About'

export default (
  <Switch>
      <Route exact path="/" component={Home} />
      <Route path = "/login" component={Login}/>
      <Route path = "/search" component ={Search}/>
      <Route path ="/upload" component={Upload}/>
      <Route path="/searchhistory" component={Searchhistory}/>
      <Route path='/About' component={About}/>
  </Switch>
)