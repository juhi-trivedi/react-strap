import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
  
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 23.033863,
      lng: 72.585022
    },
    zoom: 11
  };
 
  render() {
    return (
      <div className="gmap" style={{ height: '50vh' }}>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;