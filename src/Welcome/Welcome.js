import React from 'react'
import PropTypes from 'prop-types'

import TextField from 'components/TextField'

const styles = {
  root: {
    height: '100%',
    backgroundImage: 'linear-gradient( 0deg, #FEC163 0%, #DE4313 100%)',
  },
}

const Welcome = props => (
  <div style={styles.root}>
    <TextField hintText="Username" hintIcon="fa fa-user-circle-o" />
    <TextField hintText="Password" hintIcon="fa fa-lock" />
  </div>
)

Welcome.propTypes = {}
Welcome.defaultProps = {}

export default Welcome
