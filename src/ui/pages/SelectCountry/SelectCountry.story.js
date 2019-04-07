import React from 'react'
import { storiesOf } from '@storybook/react'
import { PageTemplate, HBox, Flex1, Divider } from '@ui/atoms'
import { styled } from '@ui/theme'
import { Body2 } from '@ui/atoms/Typography'
import { ModalHeader, SearchInput } from '@ui/molecules'
import { action } from '@storybook/addon-actions'

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.paddings.main}px;
`

storiesOf('ui/pages', module).add('SelectCountry', () => {
  return (
    <PageTemplate>
      <ModalHeader>
        <SearchInput onChange={console.log} />
      </ModalHeader>
    </PageTemplate>
  )
})
