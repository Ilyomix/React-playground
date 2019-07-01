import { ADD_CITY, REMOVE_CITY } from '../constants/actions-types'

const weatherReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_CITY :
      console.log('ADD_CITY')
      return [
        ...state.cities,
        action.city
      ]

    case REMOVE_CITY :
      console.log('REMOVE_CITY')
      return state.cities.map(city =>
        city === action.city ? null : city
      )

    default:
      return state
  }
}

export default weatherReducer
