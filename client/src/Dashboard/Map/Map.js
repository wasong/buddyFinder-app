import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import theme from 'theme'
import GoogleMap from './Map.component'

const styles = {
  card: {
    position: 'relative',
    height: '100%',
  },
}

class Map extends Component {
  state = {
    markers: [],
  }

  handleMarkerRightClick = (targetMarker) => {
    this.setState({
      markers: this.state.markers.filter(marker => marker.key !== targetMarker.key),
    })
  }

  handleOnInfoClose = (targetMarker) => {
    this.setState({ markers: this.state.markers.map((marker) => {
      if (marker.key === targetMarker.key) {
        return {
          ...marker,
          showInfo: false,
        }
      }
      return marker
    }) })
  }

  handleOnMarkerClick = (targetMarker) => {
    this.setState({ markers: this.state.markers.map((marker) => {
      if (marker.key === targetMarker.key) {
        return {
          ...marker,
          showInfo: true,
        }
      }
      return marker
    }) })
  }

  handleOnMapClick = (event) => {
    this.setState({
      markers: [
        ...this.state.markers,
        {
          position: event.latLng,
          defaultAnimation: 2,
          key: Date.now(),
          showInfo: false,
          onClick: this.handleOnMarkerClick,
          onRightClick: this.handleMarkerRightClick,
          onInfoClose: this.handleOnInfoClose,
        },
      ],
    })
  }

  render() {
    return (
      <div style={styles.card}>
        <GoogleMap
          containerElement={<div style={{ height: '100%' }} />}
          mapElement={<div style={{ height: '100%' }} />}
          onMapLoad={() => {}}
          onClick={this.handleOnMapClick}
          markers={this.state.markers}
        />
      </div>
    )
  }
}

Map.propTypes = {}
Map.defaultProps = {}

export default Radium(Map)
