import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { SelectField } from './SelectField'

storiesOf('ui/molecules', module).add('SelectField', () => (
  <SelectField
    label={text('label', 'Страна 1')}
    error={text('error', '')}
    tip={text('tip', '')}
    value={text('value', '')}
    onPress={action('onPress')}
  />
))
