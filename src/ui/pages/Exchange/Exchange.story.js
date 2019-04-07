import React from 'react'
import { storiesOf } from '@storybook/react'
import { PageTemplate, HBox, Flex1, Divider } from '@ui/atoms'
import { styled } from '@ui/theme'
import {
  Header,
  ButtonAccent,
  SelectField,
  CheckboxWithText,
} from '@ui/molecules'
import { action } from '@storybook/addon-actions'

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.paddings.main}px;
`

storiesOf('ui/pages', module).add('Exchange', () => {
  return (
    <PageTemplate>
      <Header icon="back" />
      <Flex1 style={{ overflowY: 'auto' }}>
        <Wrapper>
          <SelectField
            label="Страна 1"
            value="Россия"
            onPress={action('onPress select1')}
          />
          <SelectField
            label="Страна 2"
            value="Англия"
            onPress={action('onPress select2')}
          />
          <CheckboxWithText onPress={action('onPress checkbox')}>
            Со всеми условиями согласен вторая строка
          </CheckboxWithText>
        </Wrapper>
      </Flex1>
      <Wrapper>
        <ButtonAccent onPress={action('submit')}>Отправить</ButtonAccent>
      </Wrapper>
    </PageTemplate>
  )
})
