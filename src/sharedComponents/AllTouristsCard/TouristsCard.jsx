
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const TouristsCard = ({ tourists }) => {
    const { _id, spotName, location, averageCost, countryName, visitors, image, travelTime, seasonality } = tourists;
    return (
        <div className="flex flex-col md:flex-row gap-10 shadow-md mx-10 p-2 mt-10">
            <div className="mx-auto md:mx-0">
                <img src={image} alt={spotName} className="w-64 h-40" />
            </div>
            <div className="space-y-5">
                <h1 className="font-bold text-2xl mb-5">{spotName}</h1>
                <small className="mr-3 text-base"><span className="font-semibold">Country:</span> {countryName}</small>
                <small className="ml-3 text-base"><span className="font-semibold text-base">Location:</span> {location}</small>
                <div className="grid md:grid-cols-3 items-center gap-10">
                    <p><span className="font-semibold text-base">Average Cost:</span> {averageCost}</p>
                    <p className="font-thin"><span className="font-semibold text-base">Season:</span> {seasonality}</p>
                    <p className="font-thin"><span className="font-semibold text-base">Travel Time:</span> {travelTime} Hour</p>
                </div>
                <div title="Total Visitors" className="flex gap-1 items-center"><span className="font-semibold text-base"><FaEye /></span> {visitors}</div>
            </div>
            <div className="flex justify-center items-center w-full md:w-fit">
                <Link to={`/tourist/${_id}`}><button className="btn btn-accent w-full md:w-fit">View Details</button></Link>
            </div>
        </div>
    );
};

export default TouristsCard;