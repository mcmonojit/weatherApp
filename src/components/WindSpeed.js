import styled from "styled-components";

const WeatherIcon = styled.img`
  width: 130px;
  height: 130px;
  margin: 2px;
`;

const WindSpeed= ({weatherData}) => {

    let windS = weatherData?.wind?.speed;
    windS = Math.round( windS * 3.6 );
 
    return (
        <div className="description flexRow weatherInfoCard">
            <WeatherIcon src={`/icon/dust-wind.svg`}/>
            <div className="flexColumn">
                <p>Wind Speed</p>
                <p>{windS} km/h</p>
            </div>
        </div>
    );
}

export default WindSpeed;