import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Login from './Login'
import PrivateRoute from './PrivateRoute'
import Question from './Question'
import Protected from './Protected'


class App extends Component {


    render() {
        return (
            <Router>
                <Fragment>
                     <div>
                 <ul>
                     <li>
                          <Link to="/login">Login</Link>
                          </li>
                          <li>
                            <Link to="/questions/:question_id">Question</Link>
                          </li>
                          <li>
                            <Link to="/protected">Protected</Link>
                          </li>
                        </ul>
                        <Route path="/login" component={Login}/>
                        <Route path="/questions/:question_id" component={Question}/>
                        <PrivateRoute path="/protected" component={Protected}/>
                        </div>
                </Fragment>
            </Router>
        );
    }
}



export default App;
