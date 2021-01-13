import { BASE_URL } from '../components/const'
import { FETCH_CURRENCY, SET_BASE } from './const'

export function fetchCurrency() {
  return async dispatch => {
    try {
      const data = await fetch(`${BASE_URL}?json`)
      const json = await data.json()
      dispatch({ type: FETCH_CURRENCY, payload: json })
    } catch (e) {
      console.log(e);
    }
  }
}
export function setBase(data) {
  return { type: SET_BASE, payload: data }
}
