import { FETCH_CURRENCY, SET_BASE } from './const'


const initialState = {
  exchanger: [],
  base: {},
}


export const exchangerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENCY:
      return { ...state, exchanger: action.payload, base: action.payload[0] }
    case SET_BASE:
      return { ...state, base: action.payload }
    default: return state
  }
}
