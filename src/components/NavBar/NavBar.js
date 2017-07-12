import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import AppBar from 'material-ui/AppBar'

import theme from 'theme'

const createStyles = ({ height }) => ({
  appBarRoot: {
    backgroundColor: theme.color.primary,
    height: '100%',
  },
  title: {
    height: 'inherit',
    lineHeight: `${height}px`,
    fontSize: 20,
  },
})

const NavBar = ({ style, titleStyle, showMenuIconButton, ...props }) => {
  const styles = createStyles(style)
  return (
    <AppBar style={{ ...styles.appBarRoot, ...style }} titleStyle={styles.title} showMenuIconButton={false} {...props} />
  )
}

NavBar.propTypes = {}
NavBar.defaultProps = {}

export default Radium(NavBar)
