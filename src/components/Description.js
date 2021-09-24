const Description = ({weatherData}) => {

    let desc = `${weatherData?.weather[0]?.description}`;
    desc = desc.charAt(0).toUpperCase() + desc.slice(1);
 
    return (
        <div className="descript">
            <p>{desc}</p>
        </div>
    );
}

export default Description;