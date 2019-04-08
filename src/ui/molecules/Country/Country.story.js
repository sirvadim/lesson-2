import React from 'react'
import { storiesOf } from '@storybook/react'
import { Country } from './Country'
import { text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

storiesOf('ui/molecules', module).add('Country', () => (
  <Country
    title={text('title', 'Российская федерация')}
    id="RF"
    onPress={action('onPress')}
  />
))
