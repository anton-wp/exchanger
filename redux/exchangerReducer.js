import { SET_BASE } from './const'


const initialState = {
  exchanger: [],
  base: {},
}


export const exchangerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BASE:
      return { ...state, base: action.payload }
    default: return state
  }
}
