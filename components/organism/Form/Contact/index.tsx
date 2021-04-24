import React from 'react'
import {Input} from '@/atoms/Input'
import {MdAccountCircle, MdEmail, MdSubject} from 'react-icons/md'
import {Form, Formik} from 'formik'
import {motion} from 'framer-motion'
import {Btn} from '@/atoms/Button'
import {useIntl} from "react-intl";
import {ContactInfo} from "../../../../models/Contact";
import {useDispatch} from "react-redux"
import {sendMail} from "../../../../redux/actions/mail";
import {InputAdornment} from '@material-ui/core'

export const FormContact: React.FC = () => {
    const dispatch = useDispatch()
    const {formatMessage: t} = useIntl()
    const initialValues: ContactInfo = {email: "", name: '', subject: "", message: ''};


    return (
        <motion.div
            className="form"
            animate={{
                opacity: 1,
                x: 0,
                transition: {duration: 0.5, delay: 0.5},
            }}
            initial={{x: '-100%', opacity: 0}}
        >

            <Formik
                initialValues={initialValues}
                validate={values => {
                    const errors = {}

                    if (!values.email) {
                        errors['email'] = 'Required'
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
                    ) {
                        errors['email'] = 'Invalid email address'
                    }

                    if (values.email.length <= 0) {
                        errors['email'] = 'required'
                    }
                    return errors
                }}
                onSubmit={async (
                    values,
                    {setSubmitting, resetForm}
                ) => {
                    setSubmitting(true)

                    try {
                        dispatch(sendMail({...values}))
                    } catch (err) {
                        console.log(err)
                    } finally {
                        resetForm()
                        setSubmitting(false)
                    }

                }}
            >
                <Form>
                    <Input
                        id="name"
                        name="name"
                        label={t({id: 'name'})}

                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <MdAccountCircle/>
                                </InputAdornment>
                            ),
                        }}
                        type="text"
                        placeholder={t({id: 'name'})}
                        required
                    />
                    <Input
                        type="email"
                        id="email"
                        name="email"

                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <MdEmail/>
                                </InputAdornment>
                            ),
                        }}
                        placeholder={"email"}
                        required
                    />
                    <Input
                        id="subject"
                        name="subject"
                        label={t({id: 'subject'})}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <MdSubject/>
                                </InputAdornment>
                            ),
                        }}

                        type="text"
                        placeholder={t({id: 'subject'})}
                        required
                    />

                    <Input multiline
                           rows={6}
                           className={''}
                           id="message"
                           name="message"
                           label={'Message'}
                           placeholder={" "}/>


                    <Btn type="submit" fullWidth size={'large'}>
                        {t({id: 'send'})}
                    </Btn>
                </Form>


            </Formik>
        </motion.div>
    )
}
