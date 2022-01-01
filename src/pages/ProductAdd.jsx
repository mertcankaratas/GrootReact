import { Formik, Form,} from 'formik'
import React from 'react'
import * as Yup from "yup"
import { Button, FormField, Label } from 'semantic-ui-react'
import GrootTextInput from '../utilities/customFormControls/GrootTextInput'
export default function ProductAdd() {
    const initialValues = { categoryId: 1, name: "table", displayName: "table", description: "good table", price: 10, stock: 10 }

    const schema = Yup.object({
        categoryId: Yup.number().required("Category id  girmelisiniz"),
        name: Yup.string().required("ürün Adı girmelisiniz"),
        displayName: Yup.string().required("Gösterilecek Adı girmelisiniz"),
        description: Yup.string().required("Açıklamayı girmelisiniz"),
        price: Yup.number().required("Fiyatı  girmelisiniz"),
        stock: Yup.number().required("Stok bilgisini girmelisiniz")


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
                    <GrootTextInput name="categoryId" placeholder="Kategori İd"/>
                    <GrootTextInput name="name" placeholder="Ürün Adı" />
                    <GrootTextInput name="displayName" placeholder="Gösterilecek Ad" />
                    <GrootTextInput name="description" placeholder="Açıklama" />
                    <GrootTextInput name="price" placeholder="Fiyat" />
                    <GrootTextInput name="stock" placeholder="Stok" />
                   
                  
                   
                    <Button color='green' type="submit">Ekle</Button>
                </Form>

            </Formik>
        </div>
    )
}
