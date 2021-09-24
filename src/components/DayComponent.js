import * as usertz from 'user-timezone';
import styled from "styled-components";

const WeatherIcon = styled.img`
  width: 100px;
  height: 60px;
  margin: 2px;
`;


const DayComponent= ({wAllData}) => {

    console.log(wAllData);

    const dateTimeFormat = 'MMM Do';
    const dateTimeStamp = wAllData?.daily[1]?.dt;
    const date = usertz.datetime(dateTimeStamp,dateTimeFormat);
    console.log(date);

    const tempr = Math.round(wAllData?.daily[1]?.temp?.day);
    const i = `${(wAllData?.daily[1]?.weather[0]?.icon)}`;
    const weather = wAllData?.daily[1]?.weather[0]?.main;
 
    return (
        <div>
            <div className="flexColumn  dayinfoCard">
            <p>{date}</p>
            <WeatherIcon src={`/icon/${i}.svg`}/>
            <p>{tempr}°C</p>
            <p>{weather}</p>
            </div>
        </div>
    );
}

export default DayComponent;