import { Formik, Form,} from 'formik'
import React from 'react'
import * as Yup from "yup"
import { Button, FormField, Label } from 'semantic-ui-react'
import GrootTextInput from '../utilities/customFormControls/GrootTextInput'
export default function Login() {
    const initialValues = { email: "", password: "table" }

    const schema = Yup.object({
        
        email: Yup.string().required("Email adresi girmelisiniz"),
        password: Yup.string().required("password girmelisiniz"),
        
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
                    <GrootTextInput name="email" placeholder="Email"/>
                    <GrootTextInput name="password" placeholder="Password"  />
                    
                
                  
                   
                    <Button color='green' type="submit">Giriş Yap</Button>
                </Form>

            </Formik>
            
        </div>
    )
}
