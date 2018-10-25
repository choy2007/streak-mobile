const initialState = {
  isFetching: true,
  activeGame: []
}

export default function(state = initialState, action) {
  switch(action.type) {
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
        activeGame: action.payload,
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
