
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/home';
// import Liste from './components/List/contacts'; 
// import Form from './components/Form/form'; 
import Carousel from './components/Carousel/carousel'; 
import Projects from './components/Projects/projects'; 

import Buttons from './components/Projects/Buttons/buttons'; 
import TableCrud from './components/Projects/TableCrud/tablecrud'; 
import Weather from './components/Projects/Weather/weather'; 
import Contacts from './components/Projects/Contacts/contacts'; 
import Calculator from './components/Projects/Calculator/calculator'; 
import DragDrop from './components/Projects/DragDrop/App'; 
import Converter from './components/Projects/Converter/App'; 




import Nav from './components/Nav/nav'; 
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  return (
    <div className="App"> 

      <Nav/>
      {/* it is always present which makes sense for the nav */}     

      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/Form' element={<Form/>}/> */}
        {/* <Route path='/List' element={<Liste/>}/> */}
        <Route path='/Carousel' element={<Carousel/>}/>
        <Route path='/Projects' element={<Projects/>}/> 

        <Route path='/Projects/Buttons' element={<Buttons/>}/> 
        <Route path='/Projects/TableCrud' element={<TableCrud/>}/> 
        <Route path='/Projects/Weather' element={<Weather/>}/> 
        <Route path='/Projects/Contacts' element={<Contacts/>}/> 
        <Route path='/Projects/Calculator' element={<Calculator/>}/> 
        <Route path='/Projects/DragDrop' element={<DragDrop/>}/> 
        <Route path='/Projects/Converter' element={<Converter/>}/> 


      </Routes>

    </div>
  );
}

export default App;  
 