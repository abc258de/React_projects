import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './form.css'

const Inscription = () => {
  return (
    <div>
      <h2 className="title">Become a member today</h2> 

      <div className="container2">
        <form action="" method="POST">
          <div>
            <input type="text" className='' placeholder='Name'></input>
          </div>
          <div>
            <input type="tel" className='' placeholder='Telephone'></input> 
          </div>
          <div>
            <input type="text" className='' placeholder='Profession'></input>
          </div>
          <div>
            <input type="password" className='' placeholder='Password'></input>
          </div>
        </form>
        <button className='btnsignin_form'>Sign-in</button>

      </div>
    </div>
      ); 

};

export default Inscription; 