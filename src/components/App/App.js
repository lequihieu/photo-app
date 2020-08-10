import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import ListImage from '../ListImage/ListImage'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from '../Navbar'
import Landing from '../Landing'
import Login from '../Login'
import Register from '../Register'
import Profile from '../Profile/Profile'
import Search from '../Search'
const App = () => (
  // <div>  
  //   <SearchBar />  
  //   <ListImage />
  // </div>

  <Router>
  <div className="App">
    <Navbar />
    <Route exact path="/" component={Landing} />
    <div className="container">
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/search-bar" component={Search}/>
    </div>
  </div>
</Router>
)

export default App
