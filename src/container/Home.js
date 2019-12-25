import React, { Component } from 'react'

export class Home extends Component {
  render() {
    return (
      <div>
        <h1>
          Hi my name is {this.props.name}!
        </h1>
      </div>
    )
  }
}

export default Home;
