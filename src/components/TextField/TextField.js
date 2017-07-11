import React from 'react'
import TextField from 'material-ui/TextField'
import PropTypes from 'prop-types'
import Radium from 'radium'

const styles = {
  root: {
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: '0 25px',
    display: 'flex',
    alignItems: 'center',
  },
  hintStyle: {
    color: '#fff',
    bottom: 'initial',
    fontSize: 12,
  },
  hintIcon: {
    width: 16,
    fontSize: 16,
  },
  inputStyle: {
    color: 'white',
  },
}

const TextFieldComponent = ({ hintIcon, hintText, ...props }) => {
  const iconHintText = <span><i style={styles.hintIcon} className={hintIcon} /> {hintText}</span>
  return (
    <TextField
      underlineShow={false}
      style={styles.root}
      hintStyle={styles.hintStyle}
      hintText={iconHintText}
      inputStyle={styles.inputStyle}
      {...props}
    />
  )
}

TextFieldComponent.propTypes = {}
TextFieldComponent.defaultProps = {}

export default Radium(TextFieldComponent)
