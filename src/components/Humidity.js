import styled from "styled-components";

const WeatherIcon = styled.img`
  width: 160px;
  height: 160px;
  margin: 0.5px;
`;

const Humidity= ({weatherData}) => {

    let hum = weatherData?.main?.humidity;
 
    return (
        <div className="description flexRow weatherInfoCard">
            <WeatherIcon src={`/icon/humidity.svg`}/>
            <div className="flexColumn">
            <p>Humidity</p>
            <p>{hum} %</p>
            </div>
        </div>
    );
}

export default Humidity;