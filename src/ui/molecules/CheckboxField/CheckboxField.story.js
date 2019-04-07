import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { CheckboxField } from './CheckboxField'

storiesOf('ui/molecules', module).add('CheckboxField', () => (
  <CheckboxField
    value={boolean('value', false)}
    error={text('error', '')}
    disabled={boolean('disabled', false)}
    onPress={action('onPress')}
  />
))
