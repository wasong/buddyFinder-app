import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

import theme from 'theme'

const styles = {
  root: {
    fontFamily: theme.fontFamily.regular,
    padding: '15px 30px',
    textAlign: 'center',
    borderRadius: 3,
    cursor: 'pointer',
    verticalAlign: 'middle',
    touchAction: 'manipulation',
    userSelect: 'none',
    outline: 'none',
    border: 'none',
    margin: '5px 0',
    width: '100%',
  },
}

const Button = ({
  disabled,
  focusable,
  style,
  children,
  onClick,
  name,
  value,
}) => (
  <div>
    <button
      style={[styles.root, style]}
      disabled={disabled}
      name={name}
      value={value}
      onClick={e => onClick(e)}
      tabIndex={focusable ? '0' : '-1'}
    >
      {children}
    </button>
  </div>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  focusable: PropTypes.bool,
  style: PropTypes.objectOf(PropTypes.string),
  onClick: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
}

Button.defaultProps = {
  children: '',
  disabled: false,
  focusable: true,
  style: {},
  onClick: () => {},
  name: '',
  value: '',
}

export default Radium(Button)
