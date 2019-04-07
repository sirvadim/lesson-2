import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select } from '@storybook/addon-knobs'
import { RequestStatus } from './RequestStatus'

storiesOf('ui/molecules', module).add('RequestStatus', () => (
  <RequestStatus
    status={select(
      'status',
      {
        loading: 'loading',
        success: 'success',
        failure: 'failure',
        none: null,
      },
      null,
    )}
    loadingMessage={text('loadingMessage', 'Отправляем смс...')}
    successMessage={text('successMessage', 'Успешно!')}
    failureMessage={text(
      'failureMessage',
      'Произошла ошибка при отправке смс :(',
    )}
  />
))
