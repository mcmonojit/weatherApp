import styled from "styled-components";

const WeatherIcon = styled.img`
  width: 220px;
  height: 220px;
  margin: 0.5rem;
`;

// const iconOb= {
//     A01d: "clear-day",
//     A01n: "clear-night",
//     A02d: "partly-cloudy-day",
//     A02n: "partly-cloudy-night",
//     A03d: "cloudy",
//     A03n: "cloudy",
//     A04d: "cloudy",
//     A04n: "cloudy",
//     A09d: "rain",
//     A09n: "rain",
//     A10d: "partly-cloudy-day-rain",
//     A10n: "partly-cloudy-night-rain",
//     A11d: "thunderstorms",
//     A11n: "thunderstorms",
//     A13d: "partly-cloudy-day-snow",
//     A13n: "partly-cloudy-day-snow",
//     A50d: "mist",
//     A50n: "mist"
// };

const Temperature = ({ weatherData }) => {

    const tempr = Math.round(weatherData?.main?.temp);
    const feels = weatherData?.main?.feels_like;
    const i = `${(weatherData?.weather[0].icon)}`;

    return (
        <div className="temperatureComponent">
            <WeatherIcon src={`/icon/${i}.svg`}/>
            <div className="temperature">
            <div className="temperature-figure">
            <p>{tempr}</p>
            <p className="degC">°C</p>
            </div>
            </div>
            <p className="feels">Feels like {feels} °C</p>
        </div>
    );
}

export default Temperature;