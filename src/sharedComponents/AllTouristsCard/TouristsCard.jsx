import { FaEye } from "react-icons/fa";

const TouristsCard = ({ tourists }) => {
    const { _id, spotName, location, averageCost, countryName, visitors, image, travelTime, seasonality } = tourists;
    return (
        <div className="flex gap-10 shadow-md mx-10 p-2 mt-10">
            <div>
                <img src={image} alt={spotName} className="w-64 h-40" />
            </div>
            <div className="space-y-5">
                <h1 className="font-bold text-2xl mb-5">{spotName}</h1>
                <small className="mr-3 text-base"><span className="font-semibold">Country:</span> {countryName}</small>
                <small className="ml-3 text-base"><span className="font-semibold text-base">Location:</span> {location}</small>
                <div className="flex  items-center gap-10">
                    <p><span className="font-semibold text-base">Average Cost:</span> {averageCost}</p>
                    <p className="font-thin"><span className="font-semibold text-base">Season:</span> {seasonality}</p>
                    <p className="font-thin"><span className="font-semibold text-base">Travel Time:</span> {travelTime} Hour</p>
                </div>
                <div title="Total Visitors" className="flex gap-1 items-center"><span className="font-semibold text-base"><FaEye /></span> {visitors}</div>
            </div>
        </div>
    );
};

export default TouristsCard;