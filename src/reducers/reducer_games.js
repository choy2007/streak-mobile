const initialState = {
  isFetching: false,
  activeGame: [],
  users: {},
  questions: [],
  score: [],
  ranking: [],
  ranking_score: [],
  player: [],
  leaderboards: [],
  type: 'ready',
  user_score: null
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
    case 'FETCH_SCORE':
      return Object.assign({}, state, {
        score: action.payload,
        isFetching: true
      })
    case 'FETCH_SCORE_SUCCESS':
      return Object.assign({}, state, {
        score: action.payload,
        isFetching: false
      })
    case 'FETCH_USER_SCORE':
      console.log(action.payload, "action.payload")
      return Object.assign({}, state, {
        user_score: action.payload,
        isFetching: true
      })
    case 'FETCH_GAME_RANKING':
      return Object.assign({}, state, {
        ranking: action.payload.user,
        ranking_score: action.payload.score,
        isFetching: true

      })
    case 'FETCH_GAME_RANKING_SUCCESS':
      return Object.assign({}, state, {
        ranking: action.payload.user,
        ranking_score: action.payload.score,
        isFetching: false

      })
    case 'FETCH_LEADERBOARDS':
      return Object.assign({}, state, {
        leaderboards: action.payload,
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
