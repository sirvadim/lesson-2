import React from 'react'
import { storiesOf } from '@storybook/react'
import { PageTemplate, HBox } from '@ui/atoms'
import { ModalHeader, SearchInput, SearchStatus } from '@ui/molecules'
import { CountriesList } from '@ui/organisms'

storiesOf('ui/pages', module).add('SelectCountry', () => {
  return (
    <PageTemplate>
      <ModalHeader action={console.log}>
        <SearchInput onChange={console.log} />
      </ModalHeader>
      <HBox />
      <CountriesList
        title={'История поиска'}
        list={[
          { title: 'Российская Федерация', id: 'RF' },
          { title: 'Соединенные Штаты Америки', id: 'USA' },
        ]}
        selectCountry={console.log}
      />
      <SearchStatus status="initial" />
    </PageTemplate>
  )
})
