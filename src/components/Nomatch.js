import React, {Component} from 'react'
import {connect} from 'react-redux'
import {authenticateUser} from "../actions/authedUser"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem ,Button, Form, FormGroup, Label} from 'reactstrap';
import {BrowserRouter as Router, Route, Link,Redirect} from 'react-router-dom'
import DashboardNav from './DashboardNav'

class Nomatch extends Component {

    render(){
        return(
            <div>
            404 Page Not found.
            </div>
            )
    }
}



export default Nomatch