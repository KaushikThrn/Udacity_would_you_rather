import React, { Component } from 'react';
import { connect } from 'react-redux'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class Question extends Component {
  render() {
    return (
      <div>
       {this.props.question==null?<div>Loading</div>:
        <div>
        <div>Asked by {this.props.question.author}</div>
        <img src={this.props.userImg} />
       {this.props.question.optionOne["text"]} or {this.props.question.optionTwo["text"]}
       </div>}
      </div>
    );
  }
}

function mapStateToProps (state,props) {
  return {
    question: state.questions[props.match.params.question_id],
    userImg:state.users[state.questions[props.match.params.question_id]["author"]]["avatarURL"]
  }
}

export default connect(mapStateToProps)(Question)
