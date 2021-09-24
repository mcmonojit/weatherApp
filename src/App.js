import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import UpdatedAt from './components/UpdatedAt';
import Location from './components/Location';
import Temperature from './components/Temperature';
import Description from './components/Description';
import WindSpeed from './components/WindSpeed';
import Humidity from './components/Humidity';
import Pressure from './components/Pressure';
import Visibility from './components/Visibility';
import Suntime from './components/Suntime';
import Footer from './components/Footer';

function App(){

  const units = "metric";
  const appId = process.env.REACT_APP_APPID;

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

  const [query, setQuery] = useState("");
  const [placeData, setPlaceData] = useState();
  const [allData, setAllData] = useState();


  // for getting the current location weather data
  // when the app loads in the browser it will ask for location permission


  useEffect(() => {

    const fetchData = async () => {

      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      // console.log("Latitude is:", lat)
      // console.log("Longitude is:", long)
      const currentLocationWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${appId}&units=${units}`;

      try{
        const currentLocWeather = await axios.get(currentLocationWeatherUrl);
        setPlaceData(currentLocWeather.data);
        // console.log(placeData);
        }catch(error){
          console.error(error);
        }
    }

    fetchData();
  }, [appId, lat, long]);



  const querySearch = async (e) => {

    // e.preventDefault();

    const placeUrl = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${appId}&units=${units}`;

    const placeUrlRes = await axios.get(placeUrl);
    // console.log(response.status);
    setPlaceData(placeUrlRes.data);
    // console.log(placeUrlRes.data);

    const oneCallUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${placeUrlRes.data.coord.lat}&lon=${placeUrlRes.data.coord.lon}&appid=${appId}&units=${units}`;

    const oneCallUrlRes = await axios.get(oneCallUrl);
    setAllData(oneCallUrlRes.data);
    // console.log(oneCallUrlRes.data);

  }

  const submitHandler = (e) => {
    if(e.code === "Enter" || e.code === "NumpadEnter"){
      querySearch();
      // e.preventDefault();
    }
  }



  return(
    <div className="App">

      {(typeof placeData?.cod != 'undefined') ? (

      <div>

      <div className="containerCentre">

      <div className="header">
        <Header />
        <div className="searchbar">
        <input type="search" className="userInput" id="queryInput" placeholder="Search places..." required onChange={(event) => {setQuery(event.target.value)}} onKeyDown={(e) => submitHandler(e)}/>
        <button className="searchbutton" type="submit" onClick={ querySearch }><i className="icon bi bi-search"></i></button>
        </div>
      </div>
      
      <Location weatherData={placeData}/>
      <Temperature weatherData={placeData}/>

      <div className="flexRow descComponent">
      <UpdatedAt weatherData={placeData}/>
      <Description weatherData={placeData}/>
      </div>

      <div className="weatherInfoFour">

        <div className="weatherInfoRow">
        <WindSpeed weatherData={placeData}/>
        <Pressure weatherData={placeData}/>
        <Humidity weatherData={placeData}/>
        </div>

        <div className="weatherInfoRow">
        <Visibility weatherData={placeData}/>
        <Suntime weatherData={placeData} wAllData={allData}/>
        </div>

      </div>

      <div className="weatherInfoRow">
      </div>

      </div>

      <Footer />

      </div>

      ):(
        <div></div>
      )}

    </div>
  );
}

export default App;