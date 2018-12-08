const initialState = {
  isFetching: false,
  activeGame: [],
  users: {},
  questions: [],
  type: 'ready' 
}

export default function(state = initialState, action) {
  switch(action.type) {
    case 'UPDATE_TYPE':
      return Object.assign({}, state, {
        type: action.payload
      })
    case 'FETCH_GAME_REQUEST':
      return Object.assign({}, state, {
        isFetching: true
      })
    case 'FETCH_GAME_SUCCESS':
      return Object.assign({}, state, {
        isFetching: false,
        activeGame: action.payload
      })
    case 'FETCH_GAME_FAILED':
      return Object.assign({}, state, {
        isFetching: false,
      })
    case 'FETCH_ACTIVE_GAME':
      return Object.assign({}, state, {
        isFetching: true,
        activeGame: action.payload,
      })
    case 'FETCH_QUESTION':
      return Object.assign({}, state, {
        questions: action.payload,
      })
    case 'USER_JOIN':
      return Object.assign({}, state, {
        isFetching: false,
        users: action.payload.user,
      })
    case 'ADD_ACTIVE_GAME':
      if (state.activeGame.find(game => game.id === action.payload.id)) {
        return { ...state }
      } else {
        return { 
          ...state,
          activeGame: [...state.activeGame, action.payload]
        }
      }
    case 'REMOVE_INACTIVE_GAME':
      return Object.assign({}, state, {
        activeGame: state.activeGame.filter(game => game.id !== action.payload.id)
      })
    default:
      return state
  }
}
