import React, { Component } from 'react'
import WeatherCard from '../../components/WeatherCard/WeatherCard'

export default class MainViewFragment extends Component {
  render () {
    return <WeatherCard city="Toulouse" />
  }
}
