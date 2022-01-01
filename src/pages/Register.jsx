import { Formik, Form, } from 'formik'
import React from 'react'
import * as Yup from "yup"
import { Button, FormField, Label } from 'semantic-ui-react'
import GrootTextInput from '../utilities/customFormControls/GrootTextInput'
export default function Register() {
    const initialValues = { name: "", userName: "", email: "", password: "table" }

    const schema = Yup.object({
        name: Yup.string().required("Adınızı girmelisiniz"),
        userName: Yup.string().required("Kullanıcı adınızı girmelisiniz"),
        email: Yup.string().required("Email adresi girmelisiniz"),
        password: Yup.string().required("password girmelisiniz")

    })
    return (
        <div>

            <Formik
                //initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                <Form className='ui form'>
                    <GrootTextInput name="name" placeholder="Ad" />
                    <GrootTextInput name="userName" placeholder="Kullanıcı Adı" />
                    <GrootTextInput name="email" placeholder="Email" />
                    <GrootTextInput name="password" placeholder="Password" />





                    <Button color='green' type="submit">Kayıt ol</Button>
                </Form>

            </Formik>

        </div>
    )
}
