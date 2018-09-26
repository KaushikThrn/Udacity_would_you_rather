import React from 'react';
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
  DropdownItem ,Button} from 'reactstrap';
  import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
  import { connect } from 'react-redux'
  import {signOut} from "../actions/authedUser"

class DashboardNav extends React.Component {
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

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
        <NavbarBrand> Dashboard</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
               <Link to="/Dashboard/Unanswered">Unanswered </Link>
              </NavItem>
              <NavItem>
               <Link to="/Dashboard/Answered">Answered </Link>
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

export default connect(mapStateToProps)(DashboardNav)