import React from 'react'
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import SearchBox from 'react-google-maps/lib/places/SearchBox'

export default withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={14}
    defaultCenter={{ lat: 49.187737, lng: -122.849525 }}
    onClick={props.onClick}
  >
    {props.markers.map(marker => (
      <Marker
        {...marker}
        onClick={() => marker.onClick(marker)}
        onRightClick={() => marker.onRightClick(marker)}
      >
        {
          marker.showInfo && (
            <InfoWindow onCloseClick={() => marker.onInfoClose(marker)}>
              <div>{marker.infoContent}</div>
            </InfoWindow>
          )
        }
      </Marker>
    ))}
  </GoogleMap>
))
