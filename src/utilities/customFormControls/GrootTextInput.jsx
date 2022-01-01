import { useField } from 'formik'
import React from 'react'
import { Form, FormField, Label,Input } from 'semantic-ui-react'

export default function GrootTextInput({ ...props }) {
    const [field, meta] = useField(props)
    console.log(field)
    console.log(meta)
    return (

        <FormField error={meta.touched && !!meta.error}>
            
            <input {...field} {...props} />
            {meta.touched && !!meta.error ? (<Label pointing basic color="red" content={meta.error}></Label>):null}
        </FormField>

    )
}
