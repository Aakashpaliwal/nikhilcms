import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Sidebar.css';

class Sidebar extends Component {
    // constructor () {
    //     super() 
    //     this.state = {
    //       token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhaWQiOjEsImlhdCI6MTU0MDI3MzI4N30.xG68rUe4dadGAprGwvhjb_0BLSs81STXfy2BO1t09Yk",
    //       userdata : []
    //     }
    // }
    // componentWillUpdate(nextProps, nextState) {
    //   localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhaWQiOjEsImlhdCI6MTU0MDI3MzI4N30.xG68rUe4dadGAprGwvhjb_0BLSs81STXfy2BO1t09Yk')
    // }
    // componentDidMount ()
    // {
    //   this.handleClick();
    // }
    // handleClick () {
    //   fetch('https://rocky-cove-39377.herokuapp.com/profile/view',{
    //     method : 'GET',
    //     headers : {
    //       'Authorization': 'Bearer ' + this.state.token,
    //       "Content-Type" : "application/json"
    //   }
    //   })
    //     .then((res) => {
    //       res.json().then((resp) => { 
    //         console.log(resp.admindata)
    //         this.setState({ userdata:resp.admindata})
    //         // this.parseJSON(this.state)
    //       })
    //     }
      
    //   )
    //   }
    render() {
        return (
            <div className="skin-blue">
                <div className="left-sidebar">
          
            <div className="scroll-sidebar custom-scroll-sidebar-bg">
               
                <nav className="sidebar-nav">
                    <ul id="sidebarnav">
                        {/* <li> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="fa fa-rss" aria-hidden="true"></i><span className="hide-menu">Blog</span></a>
                            <ul aria-expanded="false" className="collapse">
                                <li><Link to ="/AddBlog"><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Blog</Link></li>
                                <li><a href="pages-blank.html"><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;View Blog</a></li>
                            </ul>
                        </li> */}
                        <li className="user-pro"> 
                        <a className="waves-effect waves-dark" href="#profile" data-toggle="collapse" data-target="#profile"><img src={require('../../assets/images/users/1.jpg')} />&nbsp;&nbsp;User<span className="hide-menu">
                        {/* {
          this.state.userdata ?
          this.state.userdata.map(function(item, id) {
              return(
                 
            <span key={id} >  {item.adminname}</span>
           
        )
          }
            )
          :
          <span>John Doe</span>
        } */}
                        </span></a>
                            {/* <ul aria-expanded="false" className="collapse" id="profile">
                            <Link to ="/ViewProfile"><li><a href="javascript:void(0)"><i className="ti-user"></i> My Profile</a></li></Link>
                                <li><a href="javascript:void(0)"><i className="ti-wallet"></i> My Balance</a></li>
                                <li><a href="javascript:void(0)"><i className="ti-email"></i> Inbox</a></li>
                                <li><a href="javascript:void(0)"><i className="ti-settings"></i> Account Setting</a></li>
                                <li><a href="javascript:void(0)"><i className="fa fa-power-off"></i> Logout</a></li>
                            </ul> */}
                        </li>
                        <li>
                         <a className="has-arrow waves-effect waves-dark" href="#submenu4" data-toggle="collapse" data-target="#submenu4"><i className="fa fa-rss" aria-hidden="true"></i><span className="hide-menu">Blog</span></a>
                            <ul aria-expanded="false" className="collapse" id="submenu4">
                            <Link to ="/AddBlog"><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Blog</li></Link>
                            {/* <Link to ="/ViewAdmin"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;View Admin</li></Link>    */}
                            </ul>
                        </li>

                              <li>
                         <a className="has-arrow waves-effect waves-dark" href="#service" data-toggle="collapse" data-target="#service"><i className="fa fa-cog" aria-hidden="true"></i><span className="hide-menu">Services</span></a>
                            <ul aria-expanded="false" className="collapse" id="service">
                            <Link to ="/AddServices"><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Services</li></Link>
                            {/* <Link to ="/ViewAdmin"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;View Admin</li></Link>    */}
                            </ul>
                        </li>


                         <li>
                         <a className="has-arrow waves-effect waves-dark" href="#partner" data-toggle="collapse" data-target="#partner"><i className="fa fa-user-circle-o" aria-hidden="true"></i><span className="hide-menu">Partners</span></a>
                            <ul aria-expanded="false" className="collapse" id="partner">
                            {/* <Link to ="/AddBlog"><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Blog</li></Link> */}
                            <Link to ="/ViewPartners"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;View Partners</li></Link>   
                            </ul>
                        </li>

                         <li>
                         <a className="has-arrow waves-effect waves-dark" href="#enquiry" data-toggle="collapse" data-target="#enquiry"><i className="fa fa-envelope-open-o" aria-hidden="true"></i><span className="hide-menu">Enquiry</span></a>
                            <ul aria-expanded="false" className="collapse" id="enquiry">
                            <Link to ="/ViewEnquiry"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;View Enquiries</li></Link>
                            {/* <Link to ="/ViewAdmin"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;View Admin</li></Link>    */}
                            </ul>
                        </li>
                        
                        {/* <li>
                         <a className="has-arrow waves-effect waves-dark" href="#submenu4" data-toggle="collapse" data-target="#submenu4"><i className="fa fa-user-o" aria-hidden="true"></i><span className="hide-menu">Company</span></a>
                            <ul aria-expanded="false" className="collapse" id="submenu4">
                            <Link to ="/AdminEmp"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;Admin & Employee</li></Link>
                            <Link to ="/ZoneLoc"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;Zone & Location</li></Link>
                            <Link to ="/MasterEquip"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;Master Equipment</li></Link>
                            <Link to ="/EmployeAllocation"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;Employee Allocation</li></Link>   
                            </ul>
                        </li>
                        <li>
                         <a className="has-arrow waves-effect waves-dark" href="#client" data-toggle="collapse" data-target="#client"><i className="fa fa-user-o" aria-hidden="true"></i><span className="hide-menu">Client / Customer</span></a>
                            <ul aria-expanded="false" className="collapse" id="client">
                            <Link to ="/CustomerName"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;Customer Name</li></Link>
                            <Link to ="/ViewSite"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;Site</li></Link>
                            <Link to ="/ClientEquipment"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;Equipment</li></Link>
                            <Link to ="/ClientAMC"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;AMC</li></Link>   
                            </ul>
                        </li>
                        <li>
                         <a className="has-arrow waves-effect waves-dark" href="#complaint" data-toggle="collapse" data-target="#complaint"><i className="fa fa-user-o" aria-hidden="true"></i><span className="hide-menu">Scheduling And Complaint</span></a>
                            <ul aria-expanded="false" className="collapse" id="complaint">
                            <Link to ="/ViewSchedule"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;AMC Service Schedule</li></Link>
                            <Link to ="/CompCentAlloc"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;Complaint Center And Allocation</li></Link>
                           
                            </ul>
                        </li> */}
                        {/* <li> <a className="has-arrow waves-effect waves-dark" href="#location" data-toggle="collapse" data-target="#location"><i className="fa fa-file-text-o" aria-hidden="true"></i><span className="hide-menu">Location</span></a>
                            <ul aria-expanded="false" className="collapse" id="location">
                            <Link to ="/AddLocation"><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Location</li></Link>
                            <Link to ="/ViewLocations"><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;View Location</li></Link>
                                
                            </ul>
                        </li>
                        <li>
                         <a className="has-arrow waves-effect waves-dark" href="#customer" data-toggle="collapse" data-target="#customer" aria-expanded="false"><i className="fa fa-user-circle" aria-hidden="true"></i><span className="hide-menu">Customers</span></a>
                        
                        <ul class="collapse" aria-expanded="false" id="customer">
                            <Link to ="/AddCustomer"><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Customer</li></Link>
                            <Link to ="/CustomerTable"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;View Customer</li></Link>
                        </ul>
                    
                        </li>
                        <li> <a className="has-arrow waves-effect waves-dark" href="#submenu8" data-toggle="collapse" data-target="#submenu8"><i className="fa fa-user-plus" aria-hidden="true"></i><span className="hide-menu">Employee</span></a>
                            <ul aria-expanded="false" className="collapse" id="submenu8">
                            <Link to ="/Employee"><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Employee</li></Link>
                            <Link to ="/ViewEmployee"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;View Employee</li></Link>    
                            </ul>
                        </li>
                        <li> <a className="has-arrow waves-effect waves-dark" href="#submenu11" data-toggle="collapse" data-target="#submenu11"><i className="fa fa-file-text-o" aria-hidden="true"></i><span className="hide-menu">Site</span></a>
                            <ul aria-expanded="false" className="collapse" id="submenu11">
                            <Link to ="/Site"><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Site</li></Link>
                            <Link to ="/ViewSite"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;View Site</li></Link>   
                            </ul>
                        </li>
                       
                        <li>
                         <a className="has-arrow waves-effect waves-dark"  href="#submenu3" data-toggle="collapse" data-target="#submenu3" aria-expanded="false"><i className="fa fa-cubes" aria-hidden="true"></i><span className="hide-menu">My Equipment</span></a>
                          
                            <ul class="collapse" aria-expanded="false" id="submenu3">
                            <Link to ="/AddEquipment"><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Equipment</li></Link>
                            <Link to ="/ViewEquipment"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;View Equipment</li></Link>
                            </ul>
                           
                        </li>
                      
                        <li>
                         <a className="has-arrow waves-effect waves-dark"  href="#eequipment" data-toggle="collapse" data-target="#eequipment" aria-expanded="false"><i className="fa fa-cubes" aria-hidden="true"></i><span className="hide-menu">Equipment</span></a>
                          
                            <ul class="collapse" aria-expanded="false" id="eequipment">
                            <Link to ="/AddEEquipment"><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Equipment</li></Link>
                            <Link to ="/ViewEEquipment"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;View Equipment</li></Link>
                            </ul>
                           
                        </li>
                       
                     
                        <li>
                         <a className="has-arrow waves-effect waves-dark" href="#ealloc" data-toggle="collapse" data-target="#ealloc"><i className="fa fa-user-o" aria-hidden="true"></i><span className="hide-menu">Employee Allocation</span></a>
                            <ul aria-expanded="false" className="collapse" id="ealloc">
                            <Link to ="/EmployeAllocation"><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Employee Allocation</li></Link>
                            <Link to ="/ViewEmployeAllocation"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;View Employee Allocation</li></Link>   
                            </ul>
                        </li>
                       
                         <li>
                         <a className="has-arrow waves-effect waves-dark" href="#submenu5" data-toggle="collapse" data-target="#submenu5"><i className="fa fa-hdd-o" aria-hidden="true"></i><span className="hide-menu">AMC</span></a>
                            <ul aria-expanded="false" className="collapse" id="submenu5">
                            <Link to ="/AMC"><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add AMC</li></Link>
                            <Link to ="/ViewAMC"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;View AMC</li></Link>  
                            </ul>
                        </li>
                        <li>
                         <a className="has-arrow waves-effect waves-dark" href="#submenu6" data-toggle="collapse" data-target="#submenu6"><i className="fa fa-check-circle-o" aria-hidden="true"></i><span className="hide-menu">AMC Schedule</span></a>
                            <ul aria-expanded="false" className="collapse" id="submenu6"> */}
                            {/* <Link to ="/Schedule"><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Schedule</li></Link> */}
                            {/* <Link to ="/ViewSchedule"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;View Schedule</li></Link>   
                            </ul>
                        </li>
                        <li> <a className="has-arrow waves-effect waves-dark" href="#submenu9" data-toggle="collapse" data-target="#submenu9"><i className="fa fa-file-text-o" aria-hidden="true"></i><span className="hide-menu">Complaint</span></a>
                            <ul aria-expanded="false" className="collapse" id="submenu9">
                            <Link to ="/Complaint"><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Complaint</li></Link>
                            <Link to ="/ViewComplaint"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;View Complaint</li></Link>   
                            </ul>
                        </li>
                        <li> <a className="has-arrow waves-effect waves-dark" href="#category" data-toggle="collapse" data-target="#category"><i className="fa fa-file-text-o" aria-hidden="true"></i><span className="hide-menu">Category</span></a>
                            <ul aria-expanded="false" className="collapse" id="category">
                            <Link to ="/UserCategory"><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add User Category</li></Link>
                            <Link to ="/EquipmentCategory"><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Equipment Category</li></Link>   
                            <Link to ="/ComplaintCategory"><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Complaint Category</li></Link>   
                            <Link to ="/ViewCategory"><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;View All Category</li></Link>   
                            <Link to ="/ViewComplaintCategory"><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;View Complaint Category</li></Link>   
                            <Link to ="/ViewUserCategory"><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;View User Category</li></Link>   
                            </ul>
                        </li> */}
                        {/* <li>
                         <a className="has-arrow waves-effect waves-dark" href="#submenu5" data-toggle="collapse" data-target="#submenu5"><i className="fa fa-hdd-o" aria-hidden="true"></i><span className="hide-menu">AMC</span></a>
                            <ul aria-expanded="false" className="collapse" id="submenu5">
                            <Link to ="/AMC"><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add AMC</li></Link>
                            <Link to ="/ViewAMC"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;View AMC</li></Link>  
                            </ul>
                        </li>
                        <li>
                         <a className="has-arrow waves-effect waves-dark" href="#submenu6" data-toggle="collapse" data-target="#submenu6"><i className="fa fa-check-circle-o" aria-hidden="true"></i><span className="hide-menu">Schedule</span></a>
                            <ul aria-expanded="false" className="collapse" id="submenu6">
                            <Link to ="/Schedule"><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Schedule</li></Link>
                            <Link to ="/ViewSchedule"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;View Schedule</li></Link>   
                            </ul>
                        </li> */}
                        {/* <li> 
                        <a className="has-arrow waves-effect waves-dark" href="#submenu7" data-toggle="collapse" data-target="#submenu7"><i className="fa fa-user-circle-o" aria-hidden="true"></i><span className="hide-menu">Profile</span></a>
                            <ul aria-expanded="false" className="collapse" id="submenu7">
                            <Link to ="/Profile"><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Profile</li></Link>
                                
                            </ul>
                        </li> */}
                       
                        {/* <li> <a className="has-arrow waves-effect waves-dark" href="#submenu11" data-toggle="collapse" data-target="#submenu11"><i className="fa fa-file-text-o" aria-hidden="true"></i><span className="hide-menu">Site</span></a>
                            <ul aria-expanded="false" className="collapse" id="submenu11">
                            <Link to ="/Site"><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Site</li></Link>
                            <Link to ="/ViewSite"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;View Site</li></Link>   
                            </ul>
                        </li> */}
                        {/* <li>
                         <a className="has-arrow waves-effect waves-dark" href="#submenu6" data-toggle="collapse" data-target="#submenu6"><i className="fa fa-check-circle-o" aria-hidden="true"></i><span className="hide-menu">Schedule</span></a>
                            <ul aria-expanded="false" className="collapse" id="submenu6">
                            <Link to ="/Schedule"><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Schedule</li></Link>
                            <Link to ="/ViewSchedule"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;View Schedule</li></Link>   
                            </ul>
                        </li> */}
                        {/* <li> <a className="has-arrow waves-effect waves-dark" href="#submenu12" data-toggle="collapse" data-target="#submenu12"><i className="fa fa-file-text-o" aria-hidden="true"></i><span className="hide-menu">Proposal</span></a>
                            <ul aria-expanded="false" className="collapse" id="submenu12">
                            <Link to ="/Proposal"><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Proposal</li></Link>
                            <Link to ="/ViewProposal"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;View Proposal</li></Link>
                            </ul>
                        </li>
                        <li> <a className="has-arrow waves-effect waves-dark" href="#submenu13" data-toggle="collapse" data-target="#submenu13"><i className="fa fa-file-text-o" aria-hidden="true"></i><span className="hide-menu">Invoice</span></a>
                            <ul aria-expanded="false" className="collapse" id="submenu13">
                            <Link to ="/Invoice"><li><i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;&nbsp;Add Invoice</li></Link>
                            <Link to ="/ViewInvoice"><li><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;View Invoice</li></Link>
                            </ul>
                        </li> */}
                  
                    </ul>
                </nav>
               
            </div>
                   </div>
                   </div>

           
        );
    }
}

export default Sidebar;