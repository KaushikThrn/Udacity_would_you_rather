import React, { Component } from 'react';
import { connect } from 'react-redux'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class Question extends Component {
  render() {
    return (
      <div>
       {this.props.question==null?<div>Loading</div>:<div>
       {this.props.question.optionOne["text"]} or {this.props.question.optionTwo["text"]}
       </div>}
      </div>
    );
  }
}

function mapStateToProps ({questions},props) {
  return {
    question: questions[props.match.params.question_id]
  }
}

export default connect(mapStateToProps)(Question)
