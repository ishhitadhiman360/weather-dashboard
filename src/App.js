import React from 'react';
import WeatherCard from './WeatherCard/WeatherCard';
import WeatherTable from './WeatherTable/WeatherTable';
import WeatherNavbar from './Navbar/navbar';
import WeatherGraphs from './WeatherGraphs/WeatherGraphs';


const App = () =>{
  return (
    <div className="app">
      <WeatherNavbar/>
      <WeatherCard />
      <WeatherTable />
      <WeatherGraphs />
    </div>
  );
};

export default App;
