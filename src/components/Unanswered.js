import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Button, Form, FormGroup, Label} from 'reactstrap'
import {authenticateUser} from "../actions/authedUser"
import {Link, Redirect} from 'react-router-dom'
import DashboardNav from './DashboardNav'

class Unanswered extends Component {
   
    render(){
        console.log("unAnswered",this.props)
        return(
            <div>
                <DashboardNav />
                <h3>Unanswered Questions</h3>
                <ul>{
                    this.props.unAnswered.map((question)=>(<li key={question.id}>
                      <Link to={{pathname:`/Question/${question.id}`}}>
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
    let unAnswered = Object.values(questions).filter((question)=>(
         !question.optionOne.votes.includes(authedUser[0]) && !question.optionTwo.votes.includes(authedUser[0])))
    unAnswered=unAnswered.sort((a,b)=>{
        if(a.timestamp<b.timestamp) return 1
        else if(a.timestamp>b.timestamp) return -1
        else return 0
    })
    return {
        unAnswered,
        user:authedUser[0]
    }
}

export default connect(mapStateToProps)(Unanswered)