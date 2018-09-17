import React, {Fragment, Component} from 'react'
import {Redirect, BrowserRouter as Router,Route} from 'react-router-dom'
import { connect } from 'react-redux'
import Login from './Login'
import Question from './Question'
import Protected from './Protected'


const PrivateRoute = ({ component: Component,authed, ...rest }) => (
  <Route {...rest} render={(props) => {
    console.log("wtf")
    return(
    authed
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
  )}} />
)

function mapStateToProps (state) {
  return {
    authed: state.authed
  }
}

export default connect(mapStateToProps, null, null, {pure: false,})(PrivateRoute)