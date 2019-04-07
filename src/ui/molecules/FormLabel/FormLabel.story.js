import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'
import { FormLabel } from './FormLabel'

storiesOf('ui/molecules', module).add('FormLabel', () => (
  <FormLabel
    children={text('childred', 'Form label')}
    valid={boolean('valid', false)}
  />
))
