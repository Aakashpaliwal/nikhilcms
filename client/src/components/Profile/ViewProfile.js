import React, { Component } from 'react';
import './Profile.css';
import {Link} from 'react-router-dom';

class ViewProfile extends Component {
  constructor () {
    super() 
    this.state = {
      token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhaWQiOjEsImlhdCI6MTU0MDI3MzI4N30.xG68rUe4dadGAprGwvhjb_0BLSs81STXfy2BO1t09Yk",
      userdata : []
    }
}
componentWillUpdate(nextProps, nextState) {
  localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhaWQiOjEsImlhdCI6MTU0MDI3MzI4N30.xG68rUe4dadGAprGwvhjb_0BLSs81STXfy2BO1t09Yk')
}
componentDidMount ()
{
  this.handleClick();
}
handleClick () {
  fetch('profile/view',{
    method : 'GET',
    headers : {
      'Authorization': 'Bearer ' + this.state.token,
      "Content-Type" : "application/json"
  }
  })
    .then((res) => {
      res.json().then((resp) => { 
        console.log(resp.admindata)
        this.setState({ userdata:resp.admindata})
        // this.parseJSON(this.state)
      })
    }
  
  )
  }
        render() {
            return (
                <React.Fragment>
                <div>
                <div className="skin-blue fixed-layout">
            <div className="page-wrapper">
    
                 <div className="container-fluid">
                   
                   <div className="row page-titles">
                       <div className="col-md-5 align-self-center">
                           {/* <h4 className="text-themecolor">Forms</h4> */}
                           <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">View Profile</li>
                                </ol>
                                </nav>
                       </div>
                      
                   </div>
    
    
                </div>
               <div className="custom-table-here">
                  <div className="container">
                    <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <table className="table table-hover table-bordered ">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
          {
                  this.state.userdata ?
                  this.state.userdata.map((item) =>
                        
            <tr>
              <th scope="row"> {item.adminname}</th>
              <td>{item.email}</td>
            </tr>
                  
          )
                  :
                  <span>Data is loading....</span>
                }
          </tbody>
        </table>
                    </div>
                    </div>
                  </div>  
                
               </div>
               </div>
               </div>
                </div>
                </React.Fragment>
            );
        }
    }

export default ViewProfile;