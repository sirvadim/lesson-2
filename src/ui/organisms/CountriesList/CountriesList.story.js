import React from 'react'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { CountriesList } from './CountriesList'

storiesOf('ui/organisms', module).add('CountriesList', () => (
  <CountriesList
    title={select(
      'title',
      {
        history: 'История поиска',
        countries: 'Страны',
      },
      'История поиска',
    )}
    list={[
      { title: 'Российская Федерация', id: 'RF' },
      { title: 'Соединенные Штаты Америки', id: 'USA' },
    ]}
    selectCountry={action('selectCountry')}
  />
))
