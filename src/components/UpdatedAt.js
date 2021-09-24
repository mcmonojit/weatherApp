import * as usertz from 'user-timezone';

const UpdatedAt= ({weatherData}) => {

    const unixTimeStamp = weatherData?.dt;
    // const dateTimeFormat = 'MMMM Do, YYYY h:mm ss A';
    const dateTimeFormat = 'h:mm A';
    const upd = usertz.datetime(unixTimeStamp,dateTimeFormat);
 
    return (
        <div className="description updatedAt">
            <p>Updated at {upd}</p>
        </div>
    );
}

export default UpdatedAt;