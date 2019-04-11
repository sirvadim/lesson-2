// export const SelectCountry = () => null
import React from 'react'
import { DeliveryTime } from '@ui/organisms'
import { PageTemplate, HBox } from '@ui/atoms'
import { ModalHeader, SearchInput, SearchStatus } from '@ui/molecules'
import { CountriesList } from '@ui/organisms'

export class SelectCountry extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <PageTemplate>
        <ModalHeader action={this.props.callback}>
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
  }
}
