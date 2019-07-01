import { applyMiddleware, createStore, combineReducers, compose } from 'redux'
import appReducer from '../reducers/index'
import weatherReducer from '../reducers/weatherReducer'
import citiesReducer from '../reducers/citiesReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  app: appReducer,
  weather: weatherReducer,
  cityList: citiesReducer
})

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

export default store
