import React, { Component } from 'react';
import { connect } from 'react-redux'

class Question extends Component {
  render() {
    return (
      <div className="App">
       <div>{this.props.authed?<div>true</div>:<div>false</div>}</div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    authed: state.authed
  }
}

export default connect(mapStateToProps)(Question)
