import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem ,Button} from 'reactstrap';
  import {BrowserRouter as Router, Route, Link,NavLink} from 'react-router-dom'
  import { connect } from 'react-redux'
  import {signOut} from "../actions/authedUser"
import './styles/style.css'

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  signout=(event)=> {
    event.preventDefault();
    this.props.dispatch(signOut());

  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
        {this.props.authedUser.length>0?<NavbarBrand> {this.props.user.name} Would You Rather</NavbarBrand>:<NavbarBrand>Would You Rather</NavbarBrand>}
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
               <NavLink to="/Dashboard/Unanswered" activeClassName="activeLink">Dashboard</NavLink>
              </NavItem>
              <NavItem >
               <NavLink to="/LeaderBoard" activeClassName="activeLink">LeaderBoard </NavLink>
              </NavItem>
              <NavItem >
               <NavLink to="/add" activeClassName="activeLink">Add Question</NavLink>
              </NavItem>
              <NavItem>
               <a href="#" onClick={this.signout}>Sign Out</a>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

function mapStateToProps({authedUser, users}) {
    return {
        user: users[authedUser[0]],
        authedUser:authedUser
    }
}

export default connect(mapStateToProps)(Navigation)