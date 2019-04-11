import React from 'react'
import PropTypes from 'prop-types'
import { withTheme, styled } from '@ui/theme'
import { IconRadiobuttonOn, IconRadiobuttonOff, VBox } from '@ui/atoms'
import { Formik, Field } from 'formik'
import * as Yup from 'yup'
import { InputError } from '@ui/atoms/Typography'
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
class RadiobuttonComponent extends React.Component {
  constructor(props) {
    console.log(props)
    super(props)
  }
  render() {
    return (
      <Container
        onClick={() => {
          if (this.props.disabled) return
          this.props.onPress()
        }}
      >
        {this.props.value ? (
          <IconRadiobuttonOn
            color={this.props.disabled ? '#E9E9E9' : '#FF3F6E'}
          />
        ) : (
          <IconRadiobuttonOff />
        )}
        {/* {this.props.error ? <InputError>{this.props.error}</InputError> : null} */}
      </Container>
    )
  }
}

export const Radiobutton = withTheme(RadiobuttonComponent)

Radiobutton.propTypes = {
  value: PropTypes.bool,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
}
