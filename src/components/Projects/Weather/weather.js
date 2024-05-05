import './weather.css';
import { useState } from 'react';

const api={
  key:'02071ed3f43990a2b7c17ece02a0f5ad',
  base:"https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search, setSearch]=useState("");
  const [weather, setWeather]=useState({});
 
  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    .then((res)=>res.json())
    .then((result)=>{
      setWeather(result);
    });
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather_App</h1>
        {/* search box */}
        <div>
          <input type='text' 
          placeholder='Search...'
          onChange={(e)=> setSearch(e.target.value)} 
          />
          <button onClick={searchPressed}>Search</button>
        </div>
        {/* if weather is not undefined */}
        {typeof weather.main !=='undefined' ? (
          <div>
            {/* location */}
            <p>{weather.name}</p>
            {/* temperature f/c */}
            <p>{weather.main.temp}°C</p>
            {/* condition */}
            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
          </div>
        ):(
          ""
        )}

      </header>
    </div>
  );
}

export default App;
