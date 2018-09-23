import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Button, Form, FormGroup, Label} from 'reactstrap'
import {authenticateUser} from "../actions/authedUser"
import {Link, Redirect} from 'react-router-dom'

class Unanswered extends Component {
   
    render(){
        return(
            <div>
                <ul>{
                    this.props.unAnswered.map((question)=>(<li key={question.id}>
                      <Link to={{pathname:`/Question/${question.id}`,state:{answered:false}}}>
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
    const unAnswered = Object.values(questions).filter((question)=>(
         !question.optionOne.votes.includes(authedUser[0]) && !question.optionTwo.votes.includes(authedUser[0])))
   
    return {
        unAnswered,
        user:authedUser[0]
    }
}

export default connect(mapStateToProps)(Unanswered)