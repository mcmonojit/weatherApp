const lookup = require('country-code-lookup');

const Location = ({ weatherData }) => {

    const place = `${weatherData?.name}`;
    let countryCode = `${weatherData?.sys?.country}`;
    countryCode = countryCode.trim();
    const countryName = lookup.byIso(countryCode);

    return(
    <div className="location">
        <p>{place}, {countryName.country}</p>
    </div>
    );
}

export default Location;