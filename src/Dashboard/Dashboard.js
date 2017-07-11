import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import AppBar from 'material-ui/AppBar'

class Dashboard extends Component {
  state = {}

  render() {
    return (
      <div>
        <AppBar showMenuIconButton={false} />
      </div>
    )
  }
}

Dashboard.propTypes = {}
Dashboard.defaultProps = {}

export default Radium(Dashboard)
