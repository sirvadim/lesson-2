import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select } from '@storybook/addon-knobs'
import { ModalHeader } from './ModalHeader'
import { action } from '@storybook/addon-actions'

storiesOf('ui/molecules', module).add('ModalHeader', () => (
  <ModalHeader action={action('action')}>Модальное окно</ModalHeader>
))
