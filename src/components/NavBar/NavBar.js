import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import AppBar from 'material-ui/AppBar'

import theme from 'theme'

const styles = {
  appBarRoot: {
    backgroundColor: theme.color.primary,
    height: '100%',
  },
  title: {
    height: 'inherit',
    lineHeight: '50px',
    fontSize: 20,
  },
}

const NavBar = ({ style, titleStyle, showMenuIconButton, ...props }) => (
  <AppBar style={{ ...styles.appBarRoot, ...style }} titleStyle={styles.title} showMenuIconButton={false} {...props} />
)

NavBar.propTypes = {}
NavBar.defaultProps = {}

export default Radium(NavBar)
