import React, { Component } from 'react'
import { Card, Label, Icon, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { fetchWeather } from '../../actions/WeatherActions'
import moment from 'moment'
import store from '../../store/index'

import './weathercard.scss'

class WeatherCard extends Component {
    state = {
      temp: '--°',
      condition: '',
      message: '',
      name: '',
      icon: ''
    }

    componentDidMount () {
      this.handleRefreshWeather()
    }

    handleRefreshWeather = () => {
      const { handleFetchWeather, city } = this.props
      handleFetchWeather(city)
    }

    render () {
      const data = store.getState().weather.data
      const isLoading = data && data.main

      const { city } = this.props
      const { temp, condition, icon, name, message } = isLoading ? {
        temp: `${data.main.temp}°`,
        condition: data.weather[0].main,
        name: city,
        icon: data.weather[0].icon,
        message: `Last updated: ${moment().format('DD/MM/YYYY HH:mm.ss.SSS')}`
      } : {}

      return (
        <Card>
          {
            !isLoading
              ? <Card.Content style={{ height: '127px' }}>
              </Card.Content>
              : <Card.Content>
                <Card.Header style={{ fontSize: '26px' }}>
                  { temp }{' '}
                  <Image style={{ height: '48px', width: '48px' }} src={`http://openweathermap.org/img/w/${icon}.png`} alt={icon} />
                  <Label onClick={this.handleRefreshWeather} circular className="weather-refresh-button">
                    <Icon name="refresh" />
                  </Label>
                </Card.Header>
                <Card.Meta style={{ marginTop: '-0.5rem' }}>
                  { condition }
                </Card.Meta>
                <Card.Description>
                  { name }
                </Card.Description>
                <Card.Meta style={{ fontSize: '12px', marginTop: '0rem' }}>
                  { message }
                </Card.Meta>
              </Card.Content>
          }
        </Card>
      )
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleFetchWeather: (city) => dispatch(fetchWeather(city))
  }
}

const mapStateToProps = state => {
  return state
}

const Weather = connect(mapStateToProps, mapDispatchToProps)(WeatherCard)

export default Weather
