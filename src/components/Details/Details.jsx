import React, { useState } from 'react';
import MyGoogleMap from './MyGoogleMap/MyGoogleMap';
import moment from 'moment';
import { DetailsContainer } from './DetailsStyles';
import MyLineChart from './MyLineChart/MyLineChart';

const Details = ({ data, speed }) =>  {
    const [tab, setTab] = useState('map');
    const chartData = speed.map((el,i) => {
        return {
            speed: el,
            time: moment(data[i].timestamp*1000).format('hh:mm:ss A')
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
                /> : 
                <MyLineChart id="linechart" data={chartData} speed={speed} />}
        </DetailsContainer>
    );
}

export default Details;