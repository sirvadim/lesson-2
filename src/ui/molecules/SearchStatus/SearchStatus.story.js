import React from 'react'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'
import { SearchStatus } from './SearchStatus'

storiesOf('ui/molecules', module).add('SearchStatus', () => (
  <SearchStatus
    status={select(
      'status',
      {
        initial: 'initial',
        notFound: 'notFound',
        loading: 'loading',
      },
      'initial',
    )}
  />
))
