const initialState = {
  user: {},
  isAuthenticated: false,
  isFetching: false,
  token: ''
}

export default function(state = initialState, action) {
  switch(action.type) {
    case 'SESSION_REQUEST':
      return Object.assign({}, state, {
        isFetching: true
      })
    case 'SESSION_SUCCESS':
      return Object.assign({}, state, {
        isFetching: false 
      })
    case 'LOGIN_SUCCESS':
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        user: action.payload.data,
        token: action.payload.token
      })
    case 'SESSION_FAILED':
      return Object.assign({}, state, {
        isFetching: false,
      })
    default:
      return state
  }

}

