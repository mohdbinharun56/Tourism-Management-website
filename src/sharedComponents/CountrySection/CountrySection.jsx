import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const CountrySection = ({ touristsSpot }) => {

    const filterCountry = country => {
        return touristsSpot.filter(tourist => tourist.countryName === country);
    }

    return (
        <div>
            <div className="mt-20">
                <h1 className="font-bold text-2xl md:text-4xl mb-5 text-center">Discover By Country</h1>
                <p className="text base md:text-lg mb-10 text-center w-1/2 mx-auto">Select a country to explore tailored travel packages, featuring handpicked tourist spots, must-visit landmarks, and unforgettable experiences. Begin your journey by choosing your dream destination.</p>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Bangladesh</Tab>
                    <Tab>Thailand</Tab>
                    <Tab>Indonesia</Tab>
                    <Tab>Malaysia</Tab>
                    <Tab>Vietnam</Tab>
                    <Tab>Cambodia</Tab>
                </TabList>
                <div className="overflow-x-auto mb-10">
                    <table className="table table-zebra">
                        <TabPanel >
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Package</th>
                                    <th>Avg Cost</th>
                                    <th>Visitors</th>
                                    <th>Season</th>
                                    <th>Location</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    filterCountry('Bangladesh').map((touristSpot,idx) => <tr key={idx}>
                                        <th>{idx+1}</th>
                                        <td>{touristSpot.spotName}</td>
                                        <td>{touristSpot.averageCost}</td>
                                        <td>{touristSpot.visitors}</td>
                                        <td>{touristSpot.seasonality}</td>
                                        <td>{touristSpot.location}</td>

                                    </tr>)
                                }
                            </tbody>
                        </TabPanel>
                        <TabPanel >
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Package</th>
                                    <th>Avg Cost</th>
                                    <th>Visitors</th>
                                    <th>Season</th>
                                    <th>Location</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    filterCountry('Thailand').map((touristSpot,idx) => <tr key={idx}>
                                        <th>{idx+1}</th>
                                        <td>{touristSpot.spotName}</td>
                                        <td>{touristSpot.averageCost}</td>
                                        <td>{touristSpot.visitors}</td>
                                        <td>{touristSpot.seasonality}</td>
                                        <td>{touristSpot.location}</td>

                                    </tr>)
                                }
                            </tbody>
                        </TabPanel>
                        <TabPanel >
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Package</th>
                                    <th>Avg Cost</th>
                                    <th>Visitors</th>
                                    <th>Season</th>
                                    <th>Location</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    filterCountry('Indonesia').map((touristSpot,idx) => <tr key={idx}>
                                        <th>{idx+1}</th>
                                        <td>{touristSpot.spotName}</td>
                                        <td>{touristSpot.averageCost}</td>
                                        <td>{touristSpot.visitors}</td>
                                        <td>{touristSpot.seasonality}</td>
                                        <td>{touristSpot.location}</td>

                                    </tr>)
                                }
                            </tbody>
                        </TabPanel>
                        <TabPanel >
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Package</th>
                                    <th>Avg Cost</th>
                                    <th>Visitors</th>
                                    <th>Season</th>
                                    <th>Location</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    filterCountry('Malaysia').map((touristSpot,idx) => <tr key={idx}>
                                        <th>{idx+1}</th>
                                        <td>{touristSpot.spotName}</td>
                                        <td>{touristSpot.averageCost}</td>
                                        <td>{touristSpot.visitors}</td>
                                        <td>{touristSpot.seasonality}</td>
                                        <td>{touristSpot.location}</td>

                                    </tr>)
                                }
                            </tbody>
                        </TabPanel>
                        <TabPanel >
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Package</th>
                                    <th>Avg Cost</th>
                                    <th>Visitors</th>
                                    <th>Season</th>
                                    <th>Location</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    filterCountry('Vietnam').map((touristSpot,idx) => <tr key={idx}>
                                        <th>{idx+1}</th>
                                        <td>{touristSpot.spotName}</td>
                                        <td>{touristSpot.averageCost}</td>
                                        <td>{touristSpot.visitors}</td>
                                        <td>{touristSpot.seasonality}</td>
                                        <td>{touristSpot.location}</td>

                                    </tr>)
                                }
                            </tbody>
                        </TabPanel>
                        <TabPanel >
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Package</th>
                                    <th>Avg Cost</th>
                                    <th>Visitors</th>
                                    <th>Season</th>
                                    <th>Location</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    filterCountry('Cambodia').map((touristSpot,idx) => <tr key={idx}>
                                        <th>{idx+1}</th>
                                        <td>{touristSpot.spotName}</td>
                                        <td>{touristSpot.averageCost}</td>
                                        <td>{touristSpot.visitors}</td>
                                        <td>{touristSpot.seasonality}</td>
                                        <td>{touristSpot.location}</td>

                                    </tr>)
                                }
                            </tbody>
                        </TabPanel>
                    </table>
                </div>
            </Tabs>
        </div>
    );
};

export default CountrySection;