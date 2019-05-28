import React from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper, Polyline} from 'google-maps-react';


export class MapContainer extends React.Component {
  render() {

    let points = this.props.pathPoly;

    const bounds = new this.props.google.maps.LatLngBounds();
    for (let i = 0; i < points.length; i++) {
      bounds.extend(points[i]);
    }


    return (
      <Map google={this.props.google}
           style={{width: '100%', height: '400px',}}
           className={'map'}
           zoom={14}
           bounds={bounds}>

        <Polyline
          fillColor="#0000FF"
          fillOpacity={0.35}
          path={this.props.pathPoly}
          strokeColor="#0000FF"
          strokeOpacity={0.8}
          strokeWeight={2}
        />

      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyAlr3gtql5kyrj_i88Yc0f7w5WOq9aNc0Y")
})(MapContainer)