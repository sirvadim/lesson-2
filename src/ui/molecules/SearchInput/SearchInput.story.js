import React from 'react'
import { storiesOf } from '@storybook/react'
import { SearchInput } from './SearchInput'
import { withState } from '@dump247/storybook-state'

storiesOf('ui/molecules', module).add(
  'SearchInput',
  withState({ value: '' })(({ store }) => (
    <SearchInput
      onChange={value => store.set({ value })}
      value={store.state.value}
    />
  )),
)
