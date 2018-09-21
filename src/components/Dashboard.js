import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Button, Form, FormGroup, Label} from 'reactstrap'
import {authenticateUser} from "../actions/authedUser"
import {Link, Redirect} from 'react-router-dom'

class Dashboard extends Component {

    render(){
        return(
            <div>Dashboard</div>
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