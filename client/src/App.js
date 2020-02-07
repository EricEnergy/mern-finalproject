import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar"
import './App.css';
import Search from './pages/Search'
import SignUp from './pages/CompanyForm'
import CompanyView from './pages/CompanyView';
import CompanyForm from './pages/CompanyForm';
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  var data = JSON.parse(localStorage.getItem('user'))
  let redirect=false

  function check() {
    if(!data) {
      data = {data:{message:"No User"}}
    }
    switch(data.data.message) {
      case"Token Issued!":
      return (redirect= true)
      default:{
        console.log("User not found")
      }
    }
  }
  check()


  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/signin" component={SignUp} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/search" component={Search} />
        <Route exact path = "/companyview">
          {redirect ? <CompanyView /> : <CompanyForm />}
        </Route>
       </Switch>
    </Router>
  );
}

export default App;
