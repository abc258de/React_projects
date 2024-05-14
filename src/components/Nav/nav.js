import { Link } from 'react-router-dom';
// import React, { PureComponent } from 'react';
import React, { useState, useEffect, PureComponent } from 'react';
import PropTypes from 'prop-types';
import './nav.css'
import reactlogo from '../../Images/reactlogo.png' 

class Navigation extends PureComponent {
  static propTypes = {}

  constructor(props) {
    super(props)

    this.state = { 
      
    }
  }

  render() {
    return (

      <div className='navbar2'>
        <div className='logo2'><Link to='/'> <img src={reactlogo} alt='React Logo' /></Link></div>  
        <div className='titles'>
          <div className='nav1'><Link to='/React_projects/'>Home</Link></div>
          {/* <div className='nav1'><Link to='/Form'>Form</Link></div> */}
          {/* <div className='nav1'><Link to='/List'>List</Link></div> */}
          <div className='nav1'><Link to='/React_projects/Carousel'>Carousel</Link></div>
          <div className='nav1'><Link to='/React_projects/Projects'>Projects</Link></div>


        </div>
        <button className='btnsignin'><Link to='/Form'>Members</Link></button>
      </div> 
    )

  }
}

export default Navigation

// {/* <Routes>
// <Route path='/' element={<Home/>}/>
// <Route path='/Services' element={<Services/>}/>
// <Route path='/Profile' element={<Profile/>}/>
// </Routes> */}