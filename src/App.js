
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/home';
// import Liste from './components/List/contacts'; 
// import Form from './components/Form/form'; 
import Carousel from './components/Carousel/carousel'; 
import Projects from './components/Projects/projects'; 
// import Converter from './components/Projects/Converter/App'; 
// import Buttons from './components/Projects/Buttons/buttons'; 
import TableCrud from './components/Projects/TableCrud/tablecrud'; 
import Weather from './components/Projects/Weather/weather'; 
import Contacts from './components/Projects/Contacts/contacts'; 
import Calculator from './components/Projects/Calculator/calculator'; 
import DragDrop from './components/Projects/DragDrop/App'; 
import Calendar from './components/Projects/Calendar/App'; 



import Nav from './components/Nav/nav'; 
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  return (
    <div className="App"> 

      <Nav/>
      {/* it is always present which makes sense for the nav */}     

      <Routes>

        <Route path='/React_projects/' element={<Home/>}/>
        {/* <Route path='/Form' element={<Form/>}/> */}
        {/* <Route path='/List' element={<Liste/>}/> */}
        <Route path='/React_projects/Carousel' element={<Carousel/>}/>
        <Route path='/React_projects/Projects' element={<Projects/>}/> 

        {/* <Route path='/Projects/Converter' element={<Converter/>}/>  */}
        {/* <Route path='/Projects/Buttons' element={<Buttons/>}/>  */}
        <Route path='/React_projects/Projects/TableCrud' element={<TableCrud/>}/> 
        <Route path='/React_projects/Projects/Weather' element={<Weather/>}/> 
        <Route path='/React_projects/Projects/Contacts' element={<Contacts/>}/> 
        <Route path='/React_projects/Projects/Calculator' element={<Calculator/>}/> 
        <Route path='/React_projects/Projects/DragDrop' element={<DragDrop/>}/> 
        <Route path='/React_projects/Projects/Calendar' element={<Calendar/>}/> 

      
        {/* <Route path="*" element={<Navigate to="/" />} /> */}

      </Routes>

    </div>
  );
}

export default App;  
 