import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from 'react';
import { toast } from "react-toastify";
import * as Yup from "yup";
import { db } from "../config/firebase";
import Model from './Model';

const validateContacts = Yup.object().shape({
    name : Yup.string().required("Name is required"),
    email : Yup.string().email("Invalid Email").required("Email is required"),
});

function AddUpdateContact({isOpen,onClose,isUpdate,contact}) {

    const addcontact = async (contact) => {
        try {
            const contactsRef = collection(db,"contacts");
            await addDoc(contactsRef,contact);
            toast.success("Contact Added Successfully");
        } catch (error) {
            console.log(error);
        }
    }

    const updatecontact = async (contact,id) => {
        try {
            const contactsRef = doc(db,"contacts",id);
            await updateDoc(contactsRef,contact);
            toast.success("Contact Updated Successfully");
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div>
        <Model isOpen={isOpen} onClose={onClose}>
            <Formik validationSchema={validateContacts} initialValues={ isUpdate ? {
                 name : contact.name,
                 email : contact.email,
            }: {
                name : "",
                email : "",
            }}
            onSubmit={(values) => {
                isUpdate ? updatecontact(values,contact.id) : addcontact(values);
                onClose();
            }}
            >
                <Form className="flex flex-col gap-4">
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="name">Name</label>
                        <Field name="name" className="border h-10 px-2"/>
                        <div className="text-red-500 text-xs">
                            <ErrorMessage name="name"/>
                        </div>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label htmlFor="email">Email</label>
                        <Field name="email" className="border h-10 px-2"/>
                        <div className="text-red-500 text-xs">
                            <ErrorMessage name="email"/>
                        </div>
                    </div>
                    <button className="bg-orange px-3 py-1.5 self-end border">{isUpdate ? "Update" : "Add" } Contact</button>
                </Form>
            </Formik>
        </Model>
    </div>
  )
}

export default AddUpdateContact