import { Link } from 'react-router-dom';
import React, {PureComponent } from 'react';
import './projects.css';

import crud from './images/Table-CRUD.png';
import buttons from './images/Buttons.png';
import weather from './images/weather.png';
import calculator from './images/Calculator.png';
import contacts from './images/contacts_list.png';
import converter from './images/Converter.png';
import dragdrop from './images/drag-drop.png';








const Works = () => {
  return (
    
    <div className='wrapper'>

      <h2 className="title">React projects done in class 2024</h2>

      <div className='img-and-content'>
        
        {/* PROJECT 1 */}
        <div className="container_h">

          <div className=''>
            <Link to='/Projects/TableCrud'><img src={crud} alt='Tablecrud' /></Link>
          </div>  
                          
          <div className="description_container_h">
              <h4>TABLE-CRUD</h4>
              <h6>It allows to edit, delete and add new contacts during a session. Original design. Changed afterwards bc of conflicts from other apps code.</h6>
          </div>
        </div>


        {/* PROJECT 2 */}
        <div className="container_h">

          <div className=''>
            <Link to='/Projects/Weather'><img src={weather} alt='Weather' /></Link>
          </div>  
                          
          <div className="description_container_h">
              <h4>WEATHER</h4>
              <h6>Usage of an API allowing users to know in real time the weather conditions in several cities</h6>
          </div>
        </div>        

        {/* PROJECT 3 */}
        <div className="container_h">

          <div className=''>
            <Link to='/Projects/Contacts'><img src={contacts} alt='Tablecrud' /></Link> 
          </div>  
                          
          <div className="description_container_h">
              <h4>CONTACTS LIST</h4>
              <h6>Fetching data in a URL through Axios. Use of bootstrap. Need to install Axios.</h6>
          </div>
        </div> 


        {/* PROJECT 4 */}
        <div className="container_v">

          <div className=''>
            <Link to='/Projects/Buttons'><img src={buttons} alt='Buttons' /></Link>
          </div>  
                          
          <div className="description_container_v">
              <h4>BUTTONS</h4>
              <h6>Different type of buttons created with bootstrap. Need to install @material-ui/core @material-ui/icons --force</h6>
          </div>
        </div>


        {/* PROJECT 5 */}
        <div className="container_h">

        <div className=''>
          <Link to='/Projects/Converter'><img src={converter} alt='converter' /></Link>
        </div>  
                        
        <div className="description_container_h">
            <h4>EXCHANGE RATES CONVERTER</h4>
            <h6>A converter using an API to calculate values in different currencies. Its code creates strong conflicts with original design.</h6>
        </div>
        </div>


        {/* PROJECT 6 */}
        <div className="container_h">

          <div className=''>
            <Link to='/Projects/Calculator'><img src={calculator} alt='calculator' /></Link>
          </div>  
                          
          <div className="description_container_h">
              <h4>CALCULATOR</h4>
              <h6>A calculator performing all basic mathematical calculations. This code altered the CSS of other apps.</h6>
          </div>
        </div>

        
        {/* PROJECT 7 */}
        <div className="container_h">

          <div className=''>
            <Link to='/Projects/DragDrop'><img src={dragdrop} alt='dragdrop' /></Link>
          </div>  
                          
          <div className="description_container_h">
              <h4>DRAG & DROP</h4>
              <h6>Mechanism to order items through a drag & drop system. Need to install @dnd-kit/core @dnd-kit/sortable @dnd-kit/utilities</h6>
          </div>
        </div> 



      </div>




    </div>
  );
}

export default Works;