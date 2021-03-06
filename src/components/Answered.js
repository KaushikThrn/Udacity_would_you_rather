import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Button, Form, FormGroup, Label} from 'reactstrap'
import {authenticateUser} from "../actions/authedUser"
import {Link, Redirect} from 'react-router-dom'
import DashboardNav from './DashboardNav'

class Answered extends Component {

    render(){
        return(
            <div>
                <DashboardNav />
                <h3>Answered Questions</h3>
                <ul>{
                this.props.answered.map((question)=>(<li key={question.id}>
                        <Link to={{pathname:`/Question/${question.id}`,state:{a:"s"}}}>
                        {question.optionOne["text"]} or {question.optionTwo["text"]}
                        </Link>
                        </li>))
                }
                   
                </ul>
            </div>
            )
    }
}

function mapStateToProps({questions,authedUser}) {
    const answered = Object.values(questions).filter((question)=>(
         question.optionOne.votes.includes(authedUser[0]) || question.optionTwo.votes.includes(authedUser[0])))

   
    return {
        answered,
        user:authedUser[0]
    }
}


export default connect(mapStateToProps)(Answered)