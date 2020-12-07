import React, { Component } from 'react'

export default class extends Component {
  state = {
    counter: 0
  }

  addCounter = () => {
    // this.setState({
    //   counter: this.state.counter + 1
    // })

    //Правильное изменение State
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1
      }
    })
  }

  render () {
    return (
      <>
        <h2>Counter {this.state.counter}</h2>
        <button onClick={this.addCounter}>+</button>
        <button onClick={() => this.setState({ counter: this.state.counter - 1 })}>-</button>
      </>
    )
  }
}