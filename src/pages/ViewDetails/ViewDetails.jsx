import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <h1 className="text-3xl font-bold mt-2 ml-2">Details of Spot: {data.spotName}</h1>
            <div>
                <img src={data.image} alt={data.spotName} className="mx-auto rounded-md border border-gray-400 mt-5" />
            </div>
            <table className="border-2 border-gray-100 mx-20 my-20">
                <tr className="border-2">
                    <th className="border-r-2 w-36">Country</th>
                    <td>{data.countryName}</td>
                </tr>
                <tr className="border-2">
                    <th className="border-r-2 w-36">Description</th>
                    <td>{data.description}</td>
                </tr>
                <tr className="border-2">
                    <th className="border-r-2 w-36">Seasonality</th>
                    <td>{data.seasonality}</td>
                </tr>
                <tr className="border-2">
                    <th className="border-r-2 w-36">TravelTime</th>
                    <td>{data.travelTime} hours</td>
                </tr>
                <tr className="border-2">
                    <th className="border-r-2 w-36">Visitors</th>
                    <td>{data.visitors}</td>
                </tr>
                <tr className="border-2">
                    <th className="border-r-2 w-36">Avg cost</th>
                    <td>{data.averageCost}</td>
                </tr>
                <tr className="border-2">
                    <th className="border-r-2 w-36">Location</th>
                    <td>{data.location}</td>
                </tr>
            </table>
        </div>
    );
};

export default ViewDetails;