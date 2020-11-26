import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

class AppContainer extends Component {

  componentDidMount() {
    this.props.history.push(`/${this.props.activeItem}`)
  }

  render() {
    return (
      <div></div>
    )
  }

}

export default AppContainer;
