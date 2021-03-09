import React,{useState} from 'react'
import {Formik, Form,Field} from 'formik';

export default function TodoForm(props) {
    return (
        <div>
    <Formik initialValues={{addingTask:"b"}} onSubmit={props.addTask}>
    <Form>
     <Field name="addingTask"/>
     <button type="submit">+</button>
    </Form>
    </Formik>
        </div>
    )
}
