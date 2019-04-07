import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select } from '@storybook/addon-knobs'
import { Header } from './Header'
import { action } from '@storybook/addon-actions'

storiesOf('ui/molecules', module).add('Header', () => (
  <Header
    title={text('title', 'Заголовок')}
    icon={select(
      'icon',
      {
        close: 'close',
        back: 'back',
        none: null,
      },
      null,
    )}
    action={action('action')}
  />
))
