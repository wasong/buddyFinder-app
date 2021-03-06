import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import theme from 'theme'

import Button from './Button'


const styles = {
  color: theme.color.primary,
  backgroundColor: theme.color.white,
  ':hover': {
    color: theme.color.white,
    backgroundColor: theme.color.accent,
  },
  transition: 'background-color 0.1s',
}

const SecondaryButton = ({ rootStyle, style, ...props }) => (
  <div style={rootStyle}>
    <Button style={{ ...styles, ...style }} {...props} />
  </div>
)

SecondaryButton.propTypes = {
  style: PropTypes.objectOf(PropTypes.string),
  rootStyle: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])),
}
SecondaryButton.defaultProps = {
  style: {},
  rootStyle: {},
}

export default Radium(SecondaryButton)
