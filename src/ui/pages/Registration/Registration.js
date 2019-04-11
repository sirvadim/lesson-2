import React from 'react'
import { storiesOf } from '@storybook/react'
import { PageTemplate, HBox, VBox, Flex1, Divider } from '@ui/atoms'
import { styled } from '@ui/theme'
import { Body2 } from '@ui/atoms/Typography'
import {
  Header,
  TextField,
  ButtonAccent,
  ValidationCheckBox,
  CheckboxField,
  CheckboxWithText,
  TextareaField,
  Radiobutton,
  RadiobuttonGroup,
} from '@ui/molecules'
import { action } from '@storybook/addon-actions'
import { Formik, Field } from 'formik'
import * as Yup from 'yup'

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.paddings.main}px;
`

// todo onError checkbox
const schema = Yup.object().shape({
  // name: Yup.string()
  //   .min(3, 'min 3 characters')
  //   .max(20, 'max 20 characters')
  //   .required('field is required'),
  // surname: Yup.string()
  //   .min(3, 'min 3 characters')
  //   .max(20, 'max 20 characters')
  //   .required('field is required'),
  // phone: Yup.string()
  //   .matches(/^\d+$/)
  //   .length(10)
  //   .required('field is required'),
  // mail: Yup.string()
  //   .email('invalid email')
  //   .required('field is required'),
  // sex: Yup.bool().required('field is required'),
  // about: Yup.string().max(200, 'max 200 characters'),
  terms: Yup.bool()
    .oneOf([true], 'Must Accept Terms and Conditions')
    .required('you must accept terms'),
})

schema
  .isValid({
    terms: true,
  })
  .then(valid => {
    console.log('valid', valid)
  })

const initialValues = {
  name: '',
  surname: '',
  phone: '',
  mail: '',
  sex: '',
  about: '',
  terms: false,
}

const mockData = {
  name: 'vadim',
  surname: 'kirienko',
  phone: '9114526412',
  mail: 'sir.vadim2013@yandex.ru',
  sex: 'male',
  about: '',
  terms: false,
}

export const Registration = () => {
  return (
    <PageTemplate>
      <Header title="Регистрация" />
      <Flex1>
        <Wrapper>
          <Formik
            validationSchema={schema}
            initialValues={mockData}
            onSubmit={values => console.log('values', values)}
            render={props => (
              <form>
                <TextField
                  name="name"
                  label="Ваше имя"
                  placeholder="Иван"
                  value={props.values.name}
                  onChange={value => props.setFieldValue('name', value)}
                  onBlur={props.handleBlur}
                  error={props.touched.name && props.errors.name}
                />
                <HBox />
                <TextField
                  name="surname"
                  label="Ваша фамилия"
                  placeholder="Иванов"
                  value={props.values.surname}
                  onChange={value => props.setFieldValue('surname', value)}
                  onBlur={props.handleBlur}
                  error={props.touched.surname && props.errors.surname}
                />
                <HBox />
                <TextField
                  name="phone"
                  label="Номер телефона"
                  startAdornment="+7"
                  placeholder="XXXXXXXXXX"
                  value={props.values.phone}
                  onChange={value => props.setFieldValue('phone', value)}
                  onBlur={props.handleBlur}
                  error={props.touched.phone && props.errors.phone}
                />
                <HBox />
                <TextField
                  name="mail"
                  label="Email"
                  placeholder="simple@mail.com"
                  value={props.values.mail}
                  onChange={value => props.setFieldValue('mail', value)}
                  onBlur={props.handleBlur}
                  error={props.touched.mail && props.errors.mail}
                />
                <HBox />
                {/* Пол */}
                <TextareaField
                  name="about" // warning wtf??? todo
                  value={props.values.about}
                  label="Немного о себе"
                  placeholder="Ваше хобби, любимые книги и т.д."
                  onChange={value => props.setFieldValue('about', value)}
                  onBlur={props.handleBlur}
                  error={props.touched.about && props.errors.about}
                />
                <HBox />
                <HBox />
                <RadiobuttonGroup label="Пол" text1="муж." text2="жен." />
                <HBox />
                {/* <CheckboxField
                  // component="checkbox"
                  name="terms"
                  // type="checkbox"
                  // component={CheckboxField}
                  // checked={props.values.terms}
                  onChange={value => props.setFieldValue('terms', value)}
                  onPress={() => {
                    console.log(props)
                    props.values.terms = !props.values.terms
                    props.handleChange('terms')
                    // props.isValid = true
                    // props.submitForm()
                    // props.handleSubmit()
                    // console.log('valid?', props.isValid)
                  }}
                />
                <HBox /> */}
                <CheckboxWithText
                  children="Со всеми условиями согласен вторая строка"
                  onChange={value => {
                    props.setFieldValue('terms', value)
                    console.log('change')
                  }}
                  // component="checkbox"
                  name="terms"
                  // type="checkbox"
                  // component={CheckboxField}
                  // checked={props.values.terms}
                  onPress={() => {
                    console.log(props)
                    props.values.terms = !props.values.terms
                    props.handleChange('terms')
                    // props.isValid = true
                    // props.submitForm()
                    // props.handleSubmit()
                    // console.log('valid?', props.isValid)
                  }}
                />
                {/* <Field
              type="checkbox"
              name="terms"
            /> */}
                <ButtonAccent
                  disabled={!props.isValid}
                  onPress={props.handleSubmit}
                >
                  Send
                </ButtonAccent>
              </form>
            )}
          />
        </Wrapper>
      </Flex1>
    </PageTemplate>
  )
}
