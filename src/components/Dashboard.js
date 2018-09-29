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

class Dashboard extends Component {

    render(){
      console.log("dashboard",this.props)
        return(
            <div>
            <DashboardNav />
            </div>
            )
    }
}

function mapStateToProps(state) {
    return {
        users: Object.values(state.users).map((user) => {
            return ({
                id: user.id,
                name: user.name
            })
        }),
        username: state.authedUser
    }
}

export default connect(mapStateToProps)(Dashboard)