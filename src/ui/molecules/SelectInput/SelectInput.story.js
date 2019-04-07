import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { SelectInput } from './SelectInput'

storiesOf('ui/molecules', module).add('SelectInput', () => (
  <SelectInput
    error={text('error', '')}
    value={text('value', '')}
    startAdornment={text('startAdornment', '')}
    onPress={action('onPress')}
  />
))
