/*global google*/

import React from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps"

const MyGoogleMap = withScriptjs(withGoogleMap((props) => {
    var image = {
        url: 'satellite.svg',
        scaledSize: new google.maps.Size(30, 30)
    };
        return (
                <GoogleMap
                    defaultZoom={3}
                    defaultCenter={{ lat: +props.data.iss_position.latitude, lng: +props.data.iss_position.longitude }}
                    
                >
                    {props.isMarkerShown && <Marker icon={image} position={{ lat: +props.data.iss_position.latitude, lng: +props.data.iss_position.longitude }} />}
                </GoogleMap>
        );
}))

export default MyGoogleMap;