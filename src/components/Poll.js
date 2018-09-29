import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Button, Form, FormGroup, Label} from 'reactstrap'
import {Link, Redirect} from 'react-router-dom'
import {handleAnswerQuestion} from '../actions/questions'
import "./styles/style.css"


class Poll extends Component {

    state={
        redirect:false,
        answeredQ:this.props.answered
    }
    answerQuestion=(e,option)=>{
        e.preventDefault();
        this.props.dispatch(handleAnswerQuestion(this.props.question.id, option))
        this.setState({redirect: true })
    }

    render(){
       

        const optionOneVotes=this.props.question.optionOne["votes"].length
        const optionTwoVotes=this.props.question.optionTwo["votes"].length
        const total=optionOneVotes+optionTwoVotes
        return(
            <div>{
                this.props.answered?<div><span style={{border:'dotted',marginRight:'10px'}} className={this.props.answer==="optionOne"?"answer":null}>{this.props.question.optionOne["text"]} with Number of Votes={optionOneVotes} ({optionOneVotes/total*100}%) </span>
                <span className={this.props.answer==="optionTwo"?"answer":null} style={{border:'dotted',marginRight:'5px'}}>{this.props.question.optionTwo["text"]} with Number of Votes={optionTwoVotes} ({optionTwoVotes/total*100}%)</span></div>
                :<div><a href="" className='question' onClick={(event)=>this.answerQuestion(event,"optionOne")} style={{marginRight:'10px'}}>{this.props.question.optionOne["text"]} </a>
                 <a href="" className='question' onClick={(event)=>this.answerQuestion(event,"optionTwo")} style={{marginRight:'10px'}}>{this.props.question.optionTwo["text"]}</a></div>
            }</div>
            )
    }
}

function mapStateToProps(state,props) {
    let answer=""
  
    answer=state.questions[props.question_id].optionOne.votes.includes(state.authedUser[0])?"optionOne":(state.questions[props.question_id].optionTwo.votes.includes(state.authedUser[0])?"optionTwo":"")
    let answered=answer!==""
    return {
        question: state.questions[props.question_id],
        user:state.authedUser[0],
        answer,
        answered
    }
}

export default connect(mapStateToProps)(Poll)