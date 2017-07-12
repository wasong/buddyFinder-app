import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import { Card, CardTitle } from 'material-ui/Card'

import NavBar from 'components/NavBar'

import theme from 'theme'

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
  sideBar: {
    flex: 2,
    zIndex: 2,
  },
  map: {
    flex: 5,
    zIndex: 1,
    height: '100%',
  },
}

class Dashboard extends Component {
  state = {}

  render() {
    return (
      <div style={styles.root}>
        <NavBar style={styles.navBar} title="Buddy Finder" />
        <div style={styles.dashboard}>
          <div style={styles.sideBar}>
            <Card>
              <CardTitle>
                SideBar
              </CardTitle>
            </Card>
          </div>
          <div style={styles.map}>
            <Card>
              <CardTitle>
                Map
              </CardTitle>
            </Card>
          </div>
        </div>
      </div>
    )
  }
}

Dashboard.propTypes = {}
Dashboard.defaultProps = {}

export default Radium(Dashboard)
