import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import './footer.scss'

export default class Footer extends Component {
  render () {
    const year = new Date().getFullYear()

    return (
      <div>
        <Menu borderless className="footer-playground">
          <Menu.Item position="right">
            <Icon name="book" />
            <b>Playground</b>
            <pre> </pre>
            created with
            <pre> </pre>
            <Icon name="heart" color="red" />
            by Ilyes Abd-Lillah
            <pre> </pre>
            <Icon name="copyright" />
            { year }
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}
