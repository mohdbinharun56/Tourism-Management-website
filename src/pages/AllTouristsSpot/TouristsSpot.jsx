import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TouristsCard from '../../sharedComponents/AllTouristsCard/TouristsCard';

const TouristsSpot = () => {
    const loadedAllTouristsSpot = useLoaderData() || [];
    // console.log(loadedAllTouristsSpot);
    const [tourists, setTourists] = useState([]);

    useEffect(() => {
        setTourists(loadedAllTouristsSpot);
    }, [loadedAllTouristsSpot]);

    const filterCountry = country => {
        return tourists.filter(tourist => tourist.countryName === country);
    }
    return (
        <div>
            <input type="checkbox" /> Sorting Avg_Cost

            <Tabs>
                <TabList>
                    <Tab>Bangladesh</Tab>
                    <Tab>Thailand</Tab>
                    <Tab>Indonesia</Tab>
                    <Tab>Malaysia</Tab>
                    <Tab>Vietnam</Tab>
                    <Tab>Cambodia</Tab>
                </TabList>

                <TabPanel>
                    <h2>Bangladesh content </h2>
                    {
                        filterCountry('Bangladesh').map(tourists => <TouristsCard key={tourists._id} tourists={tourists}></TouristsCard>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2>Thailand content</h2>
                    {
                        filterCountry('Thailand').map(tourists => <TouristsCard key={tourists._id} tourists={tourists}></TouristsCard>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2>Indonesia content</h2>
                    {
                        filterCountry('Indonesia').map(tourists => <TouristsCard key={tourists._id} tourists={tourists}></TouristsCard>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2>Malaysia content</h2>
                    {
                        filterCountry('Malaysia').map(tourists => <TouristsCard key={tourists._id} tourists={tourists}></TouristsCard>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2>Vietnam content</h2>
                    {
                        filterCountry('Vietnam').map(tourists => <TouristsCard key={tourists._id} tourists={tourists}></TouristsCard>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2>Cambodia content</h2>
                    {
                        filterCountry('Cambodia').map(tourists => <TouristsCard key={tourists._id} tourists={tourists}></TouristsCard>)
                    }
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default TouristsSpot;