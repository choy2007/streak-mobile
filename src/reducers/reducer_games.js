const initialState = {
  list: [], 
  isFetching: true,
  activeGame: {}
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
        list: action.payload
      })
    case 'FETCH_GAME_FAILED':
      return Object.assign({}, state, {
        isFetching: false,
      })
    case 'UPDATE_ACTIVE_GAME':
      return Object.assign({}, state, {
        activeGame: action.payload,
      })
    case 'ADD_ACTIVE_GAME':
      if (state.list.find(game => game.id === action.payload.id)) {
        return { ...state }
      } else {
        return { 
          ...state,
          list: [...state.list, action.payload]
        }
      }
    case 'REMOVE_INACTIVE_GAME':
      return Object.assign({}, state, {
        list: state.list.filter(game => game.id !== action.payload.id)
      })
    default:
      return state
  }

}
