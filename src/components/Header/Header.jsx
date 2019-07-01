import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import './header.scss'

export default class Header extends Component {
  render () {
    return (
      <div>
        <Menu pointing >
          <Menu.Item>
            <Icon name="react" loading />
            React 16.8
          </Menu.Item>
          <Menu.Item>
            <Icon name="book" />
            Hooks, Custom Hooks, React Memo, Redux, ...
          </Menu.Item>
          <Menu.Item position="right">
            <Icon name="hand victory" />
            Training
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}
