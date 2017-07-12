import React from 'react'
import PropTypes from 'prop-types'

import TextField from 'components/TextField'
import theme from 'theme'

const styles = {
  textFieldStyle: {
    border: `1px solid ${theme.color.primary}`,
    backgroundColor: theme.color.white,
  },
  hintTextStyle: {
    color: theme.color.grey,
  },
  inputTextStyle: {
    color: theme.color.black,
  },
}

const PrimaryTextField = ({ textFieldStyle, hintTextStyle, inputTextStyle, ...props }) => (
  <TextField
    textFieldStyle={styles.textFieldStyle}
    hintTextStyle={styles.hintTextStyle}
    inputTextStyle={styles.inputTextStyle}
    {...props}
  />
)

PrimaryTextField.propTypes = {}
PrimaryTextField.defaultProps = {}

export default PrimaryTextField
