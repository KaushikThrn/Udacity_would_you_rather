import { SET_AUTHED_USER } from '../actions/authed'

 export default function authedUser (state = {authed:false}, action) {
  switch (action.type) {
    case SET_AUTHED_USER :
      return {authed:action.id}
    default :
      return state
  }
}