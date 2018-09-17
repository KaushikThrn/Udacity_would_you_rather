import React, { Component } from 'react'
import { connect } from 'react-redux'
import setAuthedUser from '../actions/authed.js'



const mapDispatchtoProps=(dispatch)=>{
   return {
    login:()=>{
        dispatch(setAuthedUser(true))
    }
   } 
}

class Login extends Component {
  render() {
    return (
      <div>
      	<button onClick={this.props.login}>Log in</button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    authed: state.authed
  }
}

export default connect(mapStateToProps,mapDispatchtoProps)(Login)