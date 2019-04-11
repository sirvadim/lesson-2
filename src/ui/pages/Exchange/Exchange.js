// export const Exchange = () => null
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
import Modal from 'react-modal'
import { SelectCountry } from '@ui/pages'
const Wrapper = styled.div`
  padding: ${({ theme }) => theme.paddings.main}px;
`

export class Exchange extends React.Component {
  constructor() {
    super()

    this.state = {
      modalIsOpen: false,
    }

    this.openModal = this.openModal.bind(this)
    this.afterOpenModal = this.afterOpenModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal() {
    this.setState({ modalIsOpen: true })
  }

  afterOpenModal() {}

  closeModal() {
    this.setState({ modalIsOpen: false })
  }

  componentDidMount() {
    Modal.setAppElement('body')
  }

  render() {
    return (
      <PageTemplate>
        <Header icon="back" />
        <Flex1>
          <Wrapper>
            <SelectField
              label="Страна 1"
              value="Россия"
              onPress={() => {
                action('onPress select1')
                this.openModal()
              }}
            />
            <SelectField
              label="Страна 2"
              value="Англия"
              onPress={() => {
                action('onPress select2')
                this.openModal()
              }}
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
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
          <SelectCountry callback={this.closeModal} />
        </Modal>
      </PageTemplate>
    )
  }
}
