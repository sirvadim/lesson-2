import React from 'react'
import PropTypes from 'prop-types'
import { theme } from '@ui/theme'
import { IconCheckboxOn, IconCheckboxOff } from '@ui/atoms'

export const CheckboxField = ({ value, disabled, error, onPress }) => (
  <div onClick={onPress && !disabled ? onPress : undefined}>
    {value ? (
      <IconCheckboxOn color={disabled ? theme.pallete.whiteSmoke : undefined} />
    ) : (
      <IconCheckboxOff color={error ? theme.pallete.errorColor : undefined} />
    )}
  </div>
)

CheckboxField.propTypes = {
  value: PropTypes.bool,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
}
