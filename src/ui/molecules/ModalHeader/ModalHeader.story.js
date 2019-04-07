import React from 'react'
import { storiesOf } from '@storybook/react'
import { ModalHeader } from './ModalHeader'
import { action } from '@storybook/addon-actions'

storiesOf('ui/molecules', module).add('ModalHeader', () => (
  <ModalHeader action={action('action')}>Модальное окно</ModalHeader>
))
