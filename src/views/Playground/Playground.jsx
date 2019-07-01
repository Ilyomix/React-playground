import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import MainViewFragment from '../MainViewFragment/MainViewFragment'

export default class Playground extends Component {
  render () {
    return (
      <Grid padded>
        <Grid.Row>
          <Grid.Column width={16}>
            <MainViewFragment />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
