import React, { Component } from 'react'
import List from './list'

class Contacts extends Component {
  
  state = {
      contacts:[ 
        {
          id:1,
          lname:"borges",
          fname:"vitor",
          email:"vbgs@quoi.hula",
          tel:1234567890
        },
        {
          id:2,
          lname:"putre",
          fname:"alice",
          email:"vbgs@quoi.hula1", 
          tel:1234567891
        },
        {
          id:3,
          lname:"blist",
          fname:"chaf",
          email:"vbgs@quoi.hula2",
          tel:1234567892
        }
      ]
    }
  
  render() {
    return (
      <div>
        {this.state.contacts.map(list=>(
          <List
          key={list.id}
          lname={list.lname}
          fname={list.fname}
          email={list.email}
          phone={list.tel}
          />
        ))}
      </div>
    );
  }
}


export default Contacts 