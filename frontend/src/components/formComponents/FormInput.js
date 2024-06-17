import React from 'react'
import { useFormikContext } from 'formik'

import { TextField } from '@mui/material'
import ErrorMessage from './ErrorMessage'

export default function FormInput({ name, title, width = '100%', ...otherProps }) {
    const { setFieldTouched, handleChange, errors, touched, values } = useFormikContext()
  return (
    <>
        <TextField
            onBlur={() => setFieldTouched(name)}
            onChange={handleChange(name)}
            value={values[name]}
            title={title}
            sx={{ width, marginTop: 1 }}
            {...otherProps}
        />
        <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}
