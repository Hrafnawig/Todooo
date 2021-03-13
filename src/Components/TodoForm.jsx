import React from 'react'
import {Formik, Form,Field} from 'formik';
import style from "./Todo.module.scss";

export default function TodoForm(props) {
    return (
        <div>
    <Formik initialValues={{addingTask:"bar"}} onSubmit={props.addTask}>
    <Form>
     <Field name="addingTask"/>
     <button className={style.addBTN} type="submit">+</button>
    </Form>
    </Formik>
        </div>
    )
}
