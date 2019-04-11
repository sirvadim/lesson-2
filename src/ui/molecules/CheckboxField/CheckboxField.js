import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from '@ui/theme'
import { IconCheckboxOn, IconCheckboxOff } from '@ui/atoms'
import { Formik, Field } from 'formik'
import * as Yup from 'yup'
import { InputError } from '@ui/atoms/Typography'

const schema = Yup.object({
  terms: Yup.boolean().oneOf([true], 'Must Accept Terms and Conditions'),
})

export class ValidationCheckBox extends React.Component {
  constructor(props) {
    console.log(props)
    super(props)
  }
  render() {
    return (
      <Formik
        initialValues={{
          singleCheckbox: false,
        }}
        validationSchema={Yup.object().shape({
          singleCheckbox: Yup.bool().oneOf([true], 'Must agree to something'),
        })}
        onSubmit={(values, actions) => {
          console.log('submit')
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2))
            actions.setSubmitting(false)
          }, 500)
        }}
        render={({
          handleSubmit,
          setFieldValue,
          setFieldTouched,
          values,
          errors,
          touched,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <h2>Single checkbox</h2>
            <Field
              component={CheckboxField}
              name="singleCheckbox"
              id="singleCheckbox"
              label="Agree to something"
              value={this.props.value}
              error={this.props.error}
              disabled={this.props.disabled}
              // onPress={this.props.onPress}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              onClick={() => handleSubmit()}
            >
              Submit
            </button>
          </form>
        )}
      />
    )
  }
}
class CheckboxFieldClass extends React.Component {
  constructor(props) {
    console.log(props)
    super(props)
    this.state = {
      pressed: false,
    }
  }
  render() {
    // return <div />
    //  ({ value, disabled, error, onPress, theme }) => (
    return (
      <div
        onClick={
          () => {
            console.log('press')
            this.setState({ pressed: !this.state.pressed })
            // this.props.onPress()
          }
          // this.props.onPress && !this.props.disabled
          //   ? this.props.onPress
          //   : undefined
        }
        onChange={e => {
          this.props.onChange(e.currentTarget.value)
          console.log('change')
        }}
      >
        {this.state.pressed ? (
          <IconCheckboxOn
            color={
              this.props.disabled
                ? this.props.theme.pallete.whiteSmoke
                : undefined
            }
          />
        ) : (
          <IconCheckboxOff
            color={
              this.props.error ? this.props.theme.pallete.errorColor : undefined
            }
          />
        )}
        {this.props.error ? <InputError>{this.props.error}</InputError> : null}
      </div>
    )
  }
}

export const CheckboxField = withTheme(CheckboxFieldClass)
// export default withTheme(CheckboxField)

CheckboxField.propTypes = {
  value: PropTypes.bool,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
}
