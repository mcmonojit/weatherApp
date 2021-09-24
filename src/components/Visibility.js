import styled from "styled-components";

const WeatherIcon = styled.img`
  width: 140px;
  height: 140px;
  margin: 2px;
`;

const Visibility= ({weatherData}) => {

    let vis = weatherData?.visibility;
    vis=vis/1000;
 
    return (
        <div className="description flexRow weatherInfoCard">
            <WeatherIcon src={`/icon/dust-day.svg`}/>
            <div className="flexColumn">
            <p>Visibility</p>
            <p>{vis} km</p>
            </div>
        </div>
    );
}

export default Visibility;