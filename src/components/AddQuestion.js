import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Button, Form, FormGroup, Label} from 'reactstrap'
import {authenticateUser} from "../actions/authedUser"
import {Link, Redirect} from 'react-router-dom'
import {handleAddQuestion} from "../actions/questions"

class AddQuestion extends Component {
	state={
		optionOne:"",
		optionTwo:"",
		redirect:false
	}

	updateState=(key,value)=>{
        this.setState({[key]:value})

    }

    handleSubmit=(event)=>{
    event.preventDefault();
    if(this.state.optionOne!=="" && this.state.optionTwo!==""){
	    this.props.dispatch(handleAddQuestion(this.state.optionOne, this.state.optionTwo))
		this.setState({redirect: true })
	}


  }

   render(){
	   	if (this.state.redirect) {
	            return <Redirect to='/Unanswered'/>
	        }
        return(
        <div style={{margin:'5px'}}>
        <h2>Would You Rather</h2>
        <form onSubmit={this.handleSubmit}>
        <div>
        <label >Option One
        <input style={{margin:'2px'}} type="text" value={this.state.optionOne} onChange={(event)=>{this.updateState("optionOne",event.target.value)}}/>
        </label>
        </div>
        <div>
         <label>Option Two
        <input style={{margin:'2px'}} type="text" value={this.state.optionTwo} onChange={(event)=>{this.updateState("optionTwo",event.target.value)}}/>
        </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
      </div>
            )
    }
}



export default connect()(AddQuestion)