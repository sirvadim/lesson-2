import React from 'react'
import PropTypes from 'prop-types'
import { withTheme, styled, theme } from '@ui/theme'
import {
  IconRadiobuttonOn,
  IconRadiobuttonOff,
  VBox,
  HBox,
  FieldContainer,
} from '@ui/atoms'
import { FormLabel } from '@ui/molecules'
import { Formik, Field } from 'formik'
import * as Yup from 'yup'
import { InputError } from '@ui/atoms/Typography'
import { Radiobutton } from '../Radiobutton/Radiobutton'
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
class RadiobuttonGroupComponent extends React.Component {
  constructor(props) {
    console.log(props)
    super(props)
    this.state = {
      male: true,
    }
    this.onRadioPress = this.onRadioPress.bind(this)
  }

  onRadioPress(event) {
    this.setState({ male: !this.state.male })
  }
  render() {
    return (
      <Container>
        <FieldContainer>
          <FormLabel>{this.props.label}</FormLabel>
        </FieldContainer>
        <Radiobutton value={this.state.male} onPress={this.onRadioPress} />
        <VBox />
        <div>{this.props.text1}</div>
        <VBox />
        <VBox />
        <Radiobutton value={!this.state.male} onPress={this.onRadioPress} />
        <VBox />
        <div>{this.props.text2}</div>
      </Container>
    )
  }
}

export const RadiobuttonGroup = withTheme(RadiobuttonGroupComponent)

RadiobuttonGroup.propTypes = {
  value: PropTypes.bool,
  text1: PropTypes.string,
  text2: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
}
