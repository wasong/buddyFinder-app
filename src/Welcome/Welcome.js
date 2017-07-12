import React from 'react'
import PropTypes from 'prop-types'

import TextField from 'components/TextField'
import PrimaryButton from 'components/Button/PrimaryButton'
import theme from 'theme'

const styles = {
  root: {
    height: '100%',
    backgroundColor: theme.color.black,
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
  },
  logo: {
    fontSize: 60,
    color: theme.color.primary,
  },
  slogan: {
    fontSize: 30,
    color: theme.color.white,
    margin: '0 0 40px',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttons: {
    width: 150,
    margin: '20px 0 0',
  },
}

const Welcome = props => (
  <div style={styles.root}>
    <img src={hero} alt="hero" />
    <div style={styles.content}>
      <div style={styles.logo}>B<small>F</small></div>
      <div style={styles.slogan}>Insert our fancy slogan here</div>
      <TextField hintText="Username" hintIcon="fa fa-user-circle-o" />
      <TextField hintText="Password" hintIcon="fa fa-lock" />
      <PrimaryButton rootStyle={styles.buttons}>Log In</PrimaryButton>
    </div>
  </div>
)

Welcome.propTypes = {}
Welcome.defaultProps = {}

export default Welcome
