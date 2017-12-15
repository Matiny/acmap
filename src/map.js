import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";

export default class MyMapComponent extends React.Component {
  withScriptjs(withGoogleMap(() =>
    <GoogleMap
      defaultZoom={3}
      defaultCenter={{ lat: 37.5, lng: -26.275 }}
    >
      <Marker
        icon={one}
        position={{ lat: 31.264, lng: 35.11}} >
        <InfoWindow>
          <div>
            <img src={require("./images/jpg/ac1-icon.jpg")} alt="" className="picture"/>
            <p className="info">Assassin's Creed 1</p>
          </div>
        </InfoWindow>
        </Marker>

      <Marker
        icon={one}
        position={{ lat: 41.5, lng: 15}} />

      <Marker
        icon={one}
        position={{ lat: 24.73, lng: -77.565}} />

      <Marker
        icon={one}
        position={{ lat: 44.384, lng: -63.57}} />

      <Marker
        icon={one}
        position={{ lat: 42, lng: -75.5}} />

      <Marker
        icon={one}
        position={{ lat: 52.68, lng: -1.84}} />

      <Marker
        icon={one}
        position={{ lat: 46.6, lng: 2.79}} />

      <Marker
        icon={one}
        position={{ lat: 26, lng: 29.8}} />

    </GoogleMap>
  ))
}
