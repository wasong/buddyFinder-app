import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import { Card, CardTitle } from 'material-ui/Card'
import theme from 'theme'

import NavBar from 'components/NavBar'
import Map from './Map'
import Sidebar from './Sidebar'


const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  navBar: {
    height: 50,
  },
  dashboard: {
    flex: 15,
    display: 'flex',
  },
  map: {
    flex: 1,
  },
}

class Dashboard extends Component {
  state = {}

  render() {
    return (
      <div style={styles.root}>
        <NavBar style={styles.navBar} title="Buddy Finder" />
        <div style={styles.dashboard}>
          <div style={styles.map}>
            <Map />
          </div>
          <Sidebar />
        </div>
      </div>
    )
  }
}

Dashboard.propTypes = {}
Dashboard.defaultProps = {}

export default Radium(Dashboard)
