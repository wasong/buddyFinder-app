import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import { Card, CardTitle } from 'material-ui/Card'

import theme from 'theme'

const styles = {
  card: {
    position: 'relative',
    height: '100%',
  },
}

class Map extends Component {
  state = {}

  render() {
    return (
      <Card style={styles.card}>
      </Card>
    )
  }
}

Map.propTypes = {}
Map.defaultProps = {}

export default Radium(Map)
