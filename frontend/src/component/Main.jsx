import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Main extends Component {
  render() {
    return (
      <>
        <h1 className='display-3'>Main</h1>
        <Link className='btn btn-primary mt-5 mb-5'  to='todo/list'>ToDo List</Link>
      </>
    )
  }
}
