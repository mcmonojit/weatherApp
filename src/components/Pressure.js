import styled from "styled-components";

const WeatherIcon = styled.img`
  width: 130px;
  height: 130px;
  margin: 2px;
`;

const Pressure= ({weatherData}) => {

    let pres = weatherData?.main?.pressure;
 
    return (
        <div className="description flexRow weatherInfoCard">
            <WeatherIcon src={`/icon/barometer.svg`}/>
            <div className="flexColumn">
            <p>Pressure</p>
            <p>{pres} mb</p>
            </div>
        </div>
    );
}

export default Pressure;