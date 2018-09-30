import React, { Component } from 'react';
import { connect } from 'react-redux'
import {BrowserRouter as Router, Route, Link,Redirect} from 'react-router-dom'
import Poll from './Poll'

class Question extends Component {
  render() {
    if(this.props.redirect===true){
      return <Redirect to="/Nomatch"/>
    }
    return (
      <div>
       {this.props.question==null?<div>Loading</div>:
              <div>
              <h2>Would You Rather</h2>
              <span>{this.props.question.optionOne["text"]}</span> or <span>{this.props.question.optionTwo["text"]}</span>
              <div>Asked by {this.props.question.author}</div>
              <img src={this.props.userImg} alt="profile" style={{height:'100px',width:'100px'}}/>
             </div>}
             <Poll question_id={this.props.match.params.question_id} />
      </div>
    );
  }
}

function mapStateToProps (state,props) {
  let redirect=false
  try{
    return {
    question: state.questions[props.match.params.question_id],
    userImg:state.users[state.questions[props.match.params.question_id]["author"]]["avatarURL"]
    }
  }
  catch(err){
    return{
      redirect:true
    }
    
  }

  }


export default connect(mapStateToProps)(Question)
