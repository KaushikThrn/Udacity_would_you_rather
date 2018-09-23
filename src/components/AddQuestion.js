import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Button, Form, FormGroup, Label} from 'reactstrap'
import {authenticateUser} from "../actions/authedUser"
import {Link, Redirect} from 'react-router-dom'

class AddQuestion extends Component {

    render(){
        return(
            <div>Add Question</div>
            )
    }
}

function mapStateToProps(state) {
  return {state}
}

export default connect(mapStateToProps)(AddQuestion)