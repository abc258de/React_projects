import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './list.css'

class List extends Component {
 
  render() {
    return (
      <div className="card card-body">
        
        <h4>{this.props.lname}</h4>
        <ul className="list-group">
          <li className="list-group-item">First Name: {this.props.fname}</li>
          <li className="list-group-item">Email: {this.props.email}</li>
          <li className="list-group-item">Phone#: {this.props.phone}</li>
        </ul>
      </div> 
    )
  }
}
 
export default List;