import React from 'react'
import TextField from 'material-ui/TextField'
import PropTypes from 'prop-types'
import Radium from 'radium'

import theme from 'theme'

const styles = {
  root: {
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: '0 25px',
    display: 'flex',
    alignItems: 'center',
    margin: '5px 0',
  },
  hintStyle: {
    color: 'rgba(255, 255, 255, 0.5)',
    bottom: 'initial',
    fontSize: 12,
    fontFamily: theme.fontFamily.regular,
  },
  hintIcon: {
    width: 16,
    fontSize: 16,
  },
  inputStyle: {
    color: theme.color.white,
  },
}

const TextFieldComponent = ({ textFieldStyle, hintIcon, hintText, ...props }) => {
  const iconHintText = <span><i style={styles.hintIcon} className={hintIcon} /> {hintText}</span>
  return (
    <div>
      <TextField
        underlineShow={false}
        style={{ ...styles.root, ...textFieldStyle }}
        hintStyle={styles.hintStyle}
        hintText={iconHintText}
        inputStyle={styles.inputStyle}
        {...props}
      />
    </div>
  )
}

TextFieldComponent.propTypes = {}
TextFieldComponent.defaultProps = {}

export default Radium(TextFieldComponent)
