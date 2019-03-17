import React, { useState } from 'react';
import MyGoogleMap from './MyGoogleMap/MyGoogleMap';
import { DetailsContainer } from './DetailsStyles';
import LineChart from './LineChart/LineChart';

const Details = ({ data, speed }) =>  {
        const [tab, setTab] = useState('map');
        const chartData = speed.map((el,i) => {
            return {
                speed: el,
                time: i
            }
        })

        return (
            <DetailsContainer tab={tab}>
            <div className='buttons'>
                <div className='button btn-chart' onClick={() => setTab('chart')}>Chart</div>
                <div className='button btn-map' onClick={() => setTab('map')}>Map</div>
            </div>
            {tab === 'map' && data[0] ? 
                <MyGoogleMap  
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `45vh` }} />}
                    mapElement={<div style={{ height: `100%` }} />} 
                    data={data[0]}
                /> : <LineChart id="linechart" data={chartData} speed={speed} />}
            </DetailsContainer>
        );
}

export default Details;