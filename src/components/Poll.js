import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Button, Form, FormGroup, Label} from 'reactstrap'
import {authenticateUser} from "../actions/authedUser"
import {Link, Redirect} from 'react-router-dom'
import {handleAnswerQuestion} from '../actions/questions'


class Poll extends Component {

    answerQuestion=(e,option)=>{
        e.preventDefault();
        console.log("clicked on",option)
        this.props.dispatch(handleAnswerQuestion(this.props.question.id, option))
    }

    render(){
        const optionOneVotes=this.props.question.optionOne["votes"].length
        const optionTwoVotes=this.props.question.optionTwo["votes"].length
        const total=optionOneVotes+optionTwoVotes

        return(
            <div>{
                this.props.answered?<div><span>{this.props.question.optionOne["text"]} with {optionOneVotes/total*100}% </span>
                <span>{this.props.question.optionTwo["text"]} with {optionTwoVotes/total*100}%</span></div>
                :<div><a href="" onClick={(event)=>this.answerQuestion(event,"optionOne")}>{this.props.question.optionOne["text"]} </a>
                 <a href="" onClick={(event)=>this.answerQuestion(event,"optionTwo")}>{this.props.question.optionTwo["text"]}</a></div>
            }</div>
            )
    }
}

function mapStateToProps(state,props) {
    return {
        question: state.questions[props.question_id],
        user:state.authedUser
    }
}

export default connect(mapStateToProps)(Poll)