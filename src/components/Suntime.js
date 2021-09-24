import * as usertz from 'user-timezone';
import styled from "styled-components";

const WeatherIcon = styled.img`
  width: 110px;
  height: 110px;
  margin: 2px;
`;


const Suntime= ({weatherData, wAllData}) => {

    const SRunixTimeStamp = weatherData?.sys?.sunrise;
    const SSunixTimeStamp = weatherData?.sys?.sunset;
    const currentTimeStamp = wAllData?.current?.dt;

    // console.log(currentTimeStamp);
    // const dateTimeFormat = 'MMMM Do, YYYY h:mm ss A';
    const dateTimeFormat = 'h:mm A';
    const sunrise = usertz.datetime(SRunixTimeStamp,dateTimeFormat);
    const sunset = usertz.datetime(SSunixTimeStamp,dateTimeFormat);
    const currentTime = usertz.datetime(currentTimeStamp,dateTimeFormat);
    const place = weatherData?.name;
    // console.log(currentTime);
 
    return (
        <div className="description flexColumn suntimeCard figure">

            <div style={{margin: "5px auto"}}>
            {(typeof currentTimeStamp != 'undefined') ? (
            <p>Time now in {place}: {currentTime}</p>
            ) : (
                <div></div>
            )}
            </div>

            <div className="flexRow">
            <WeatherIcon src={`/icon/clear-day.svg`}/>
            <div className="flexColumn" style={{marginLeft: "1rem" }}>
                <p>Sunrise</p>
                <p>{sunrise}</p>
            </div>
            </div>
            <div className="flexRow">
            <WeatherIcon src={`/icon/sunset.svg`}/>
            <div className="flexColumn" style={{marginLeft: "1rem" }}>
                <p> Sunset</p>
                <p>{sunset}</p>
            </div>
            </div>
        </div>
    );
}

export default Suntime;