import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import { Card, CardTitle } from 'material-ui/Card'

import PrimaryTextField from 'components/TextField/PrimaryTextField'
import theme from 'theme'

const styles = {
  card: {
    position: 'absolute',
    top: 70,
    left: 20,
    padding: 20,
  },
}

class SideBar extends Component {
  state = {}

  render() {
    return (
      <Card style={styles.card}>
        <PrimaryTextField hintText="Search an address or event" />
      </Card>
    )
  }
}

SideBar.propTypes = {}
SideBar.defaultProps = {}

export default Radium(SideBar)
