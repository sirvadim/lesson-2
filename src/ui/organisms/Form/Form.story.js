import React from 'react'
import { storiesOf } from '@storybook/react'
import { HBox } from '@ui/atoms'
import { TextField, ButtonAccent } from '@ui/molecules'
import { Formik } from 'formik'
import * as Yup from 'yup'

const initialValues = {
  username: '',
  time: '',
}

const schema = Yup.object().shape({
  username: Yup.string()
    .required()
    .min(5, 'min 5 characters')
    .max(20, 'max 20 characters'),
  time: Yup.string()
    .matches(/^(([0,1][0-9])|(2[0-3])):[0-5][0-9]$/, {
      excludeEmptyString: true,
      message: 'time',
    })
    .required('time is required field'),
})

storiesOf('ui/organisms', module).add('Form', () => (
  <Formik
    validationSchema={schema}
    initialValues={initialValues}
    onSubmit={values => console.log('values', values)}
    render={props => (
      <form>
        <TextField
          name="username"
          label="Username"
          value={props.values.username}
          onChange={value => props.setFieldValue('username', value)}
          onBlur={props.handleBlur}
          error={props.touched.username && props.errors.username}
        />
        <HBox />
        <TextField
          name="time"
          label="Time"
          value={props.values.time}
          onChange={value => props.setFieldValue('time', value)}
          onBlur={props.handleBlur}
          error={props.touched.time && props.errors.time}
        />
        <HBox />
        <ButtonAccent disabled={!props.isValid} onPress={props.handleSubmit}>
          Send
        </ButtonAccent>
      </form>
    )}
  />
))
