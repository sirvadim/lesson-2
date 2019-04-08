import React from 'react'
import { storiesOf } from '@storybook/react'
import { PageTemplate, HBox } from '@ui/atoms'
import { styled } from '@ui/theme'
import { Body2 } from '@ui/atoms/Typography'
import { ModalHeader, SearchInput } from '@ui/molecules'
import { CountriesList } from '@ui/organisms'

storiesOf('ui/pages', module).add('SelectCountry', () => {
  return (
    <PageTemplate>
      <ModalHeader>
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
    </PageTemplate>
  )
})
