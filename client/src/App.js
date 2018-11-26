import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import AddBlog from './components/Blog/AddBlog';
import AddForms from './components/Forms/AddForms';
import Signin from './components/Login/AddLogin';
import Register from './components/Login/Register';
import Navigation from './components/Navigation';
import Profile from './components/Profile/Profile';
import ViewProfile from './components/Profile/ViewProfile';
import { Route, Redirect } from 'react-router-dom';
import { ViewCareer } from './components/Career/ViewCareer';
import { ViewEnquiry } from './components/Enquiry/ViewEnquiry';
import { ViewPartners } from './components/Partners/ViewPartners';
import { AddServices } from './components/Services/AddServices';


class App extends Component {
  //   constructor() {
  //   super();
  //   this.state = {
  //     route: 'signin',
  //     isSignedIn: false,
  //   }
  
  // }


  // onRouteChange = (route) => {
  //   if (route === 'signout') {
  //     this.setState({isSignedIn: false})
  //   } else if (route === 'home') {
  //     this.setState({isSignedIn: true})
  //   }
  //   this.setState({route: route});
  // }
  


  
  
  render() {
    // const { isSignedIn, route } = this.state;
    
    return (
        <div>
          
        {/* <Header isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        { route === 'home'
        ?
        <div> */}
        <Header />
        <Sidebar />
        <Route path = "/" exact component = {Home} />
        <Route path="/AddBlog" exact = {true} component = {AddBlog} />
        <Route path = "/Register" exact = {true} component = {Register} />
        <Route path = "/ViewCareer" exact = {true} component = {ViewCareer} />
        <Route path = "/ViewEnquiry" exact = {true} component = {ViewEnquiry} />
        <Route path = "/ViewPartners" exact = {true} component = {ViewPartners} />
        <Route path = "/AddServices" exact = {true} component = {AddServices} />
        {/* </div>
        : (
             route === 'signin'
             ? <Signin  onRouteChange={this.onRouteChange}/>
             : <Register onRouteChange={this.onRouteChange}/>
            )
        } */}
        
        <Footer />
          
          </div>
     
    );
  }
}

export default App;
