import React from 'react'
import { Button } from '@mui/material'

import { useFormikContext } from 'formik'

export default function FormButton({ title, width = '50%', ...otherProps }) {
    const { handleSubmit } = useFormikContext()
  return (
    <Button onClick={handleSubmit} {...otherProps} sx={{ my: 1, width }} >
        {title}
    </Button>
  )
}
