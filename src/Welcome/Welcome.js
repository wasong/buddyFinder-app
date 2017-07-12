import React from 'react'
import PropTypes from 'prop-types'

import TextField from 'components/TextField'
import theme from 'theme'

const styles = {
  logo: {
    fontSize: 60,
    color: theme.color.primary,
  },
  root: {
    height: '100%',
    backgroundColor: theme.color.black,
    display: 'flex',
    justifyContent: 'center',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
  },
}

const Welcome = props => (
  <div style={styles.root}>
    <div style={styles.content}>
      <div style={styles.logo}>B<small>F</small></div>
      <TextField hintText="Username" hintIcon="fa fa-user-circle-o" />
      <TextField hintText="Password" hintIcon="fa fa-lock" />
    </div>
  </div>
)

Welcome.propTypes = {}
Welcome.defaultProps = {}

export default Welcome
