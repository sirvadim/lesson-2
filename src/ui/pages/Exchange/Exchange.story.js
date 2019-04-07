import React from 'react'
import { storiesOf } from '@storybook/react'

import { action } from '@storybook/addon-actions'
import { PageTemplate, HBox, Flex1, Divider } from '@ui/atoms'
import { styled } from '@ui/theme'
import {
  Header,
  ButtonAccent,
  SelectField,
  CheckboxWithText,
  TextField,
} from '@ui/molecules'
import { DeliveryTime } from '@ui/organisms'

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.paddings.main}px;
`

storiesOf('ui/pages', module).add('Exchange', () => {
  return (
    <PageTemplate>
      <Header icon="back" />
      <Flex1>
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
          <Divider />
          <HBox />
          <TextField
            label="Российский рубль (RUB)"
            onChange={action('textfield1 change')}
            tip="Текст подсказки к полю"
            value="100"
            endAdornment="₽"
          />
          <HBox />
          <TextField
            label="Фунт стерлингов (GBP)"
            onChange={action('textfield2 change')}
            value="1"
            tip="Текст подсказки к полю"
            endAdornment="£"
          />
          <HBox />
          <DeliveryTime
            fromValue="10:00"
            toValue="20:00"
            fromAction={action('delivery from action')}
            toAction={action('delivery to action')}
            tip="Выберите время доставки"
          />
          <HBox />
          <CheckboxWithText onPress={action('onPress checkbox')}>
            Со всеми условиями согласен, возможно вторая строка
          </CheckboxWithText>
        </Wrapper>
      </Flex1>
      <Wrapper>
        <ButtonAccent onPress={action('submit')}>Отправить</ButtonAccent>
      </Wrapper>
    </PageTemplate>
  )
})
