import React from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

export default withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={14}
    defaultCenter={{ lat: 49.187737, lng: -122.849525 }}
    onClick={props.onMapClick}
  >
    {props.markers.map((marker, index) => (
      <Marker
        {...marker}
        onRightClick={() => props.onMarkerRightClick(index)}
      />
    ))}
  </GoogleMap>
))
