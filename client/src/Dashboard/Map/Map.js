import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import { Card } from 'material-ui/Card'

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

  handleOnMapClick = (event) => {
    this.setState({
      markers: [
        ...this.state.markers,
        {
          position: event.latLng,
          defaultAnimation: 2,
          key: Date.now(),
        },
      ],
    })
  }

  handleMarkerRightClick = (targetMarker) => {
    // this library uses index to remove markers: maybe change later?
    this.setState({
      markers: this.state.markers.filter(marker => marker.key !== this.state.markers[targetMarker].key),
    })
  }

  render() {
    return (
      <div style={styles.card}>
        <GoogleMap
          containerElement={<div style={{ height: '100%' }} />}
          mapElement={<div style={{ height: '100%' }} />}
          onMapLoad={() => {}}
          onMapClick={this.handleOnMapClick}
          markers={this.state.markers}
          onMarkerRightClick={this.handleMarkerRightClick}
        />
      </div>
    )
  }
}

Map.propTypes = {}
Map.defaultProps = {}

export default Radium(Map)
