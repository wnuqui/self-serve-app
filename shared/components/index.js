import React from 'react'

export default class AppView extends React.Component {
  render() {
    return (
      <div id="app">
        <h1>Self Serve App</h1>
        {this.props.children}
      </div>
    )
  }
}
