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
  DropdownItem } from 'reactstrap';
  import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
  import { connect } from 'react-redux'

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
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
        {this.props.authedUser.length>0?<NavbarBrand> {this.props.user.name} Would You Rather</NavbarBrand>:<NavbarBrand>Would You Rather</NavbarBrand>}
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
               <Link to="/Dashboard">Dashboard</Link>
              </NavItem>
              <NavItem>
               <Link to="/Unanswered">Unanswered</Link>
              </NavItem>
              <NavItem>
               <Link to="/Answered">Answered</Link>
              </NavItem>
              <NavItem>
               <Link to="/LeaderBoard">LeaderBoard</Link>
              </NavItem>
              <NavItem>
               <Link to="/add">AddQuestion</Link>
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