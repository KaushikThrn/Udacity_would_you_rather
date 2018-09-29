import React, {Component} from 'react'
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