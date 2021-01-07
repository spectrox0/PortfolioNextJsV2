import React from 'react'
import Input from '../../Inputs/InputV1'
import { MdAccountCircle, MdEmail, MdSubject } from 'react-icons/md'
import { Formik } from 'formik'
import axios from 'axios'
import Loading from '../../Loading'
import { motion } from 'framer-motion'
export default function Form() {
  const [loading, setLoading] = React.useState<boolean>(false)

  return (
    <Formik
      initialValues={{ name: '', email: '', subject: '', message: '' }}
      validate={values => {
        var errors = {}
        if (values.name.length > 30) errors['username'] = 'No more 30 characters'
        if (values.name.length <= 0) {
          errors['username'] = 'required'
        }
        if (values.subject.length > 30)
          errors["username"] = 'No more 30 characters'
        if (values.subject.length <= 0) {
          errors['username'] = 'required'
        }
        if (values.message.length > 255)
          errors['username'] = 'No more 255 characters'
        if (values.message.length <= 0) {
          errors['username'] = 'required'
        }
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
        { name, email, subject, message },
        { setSubmitting, resetForm }
      ) => {
        setSubmitting(true)
        setLoading(true)
        const { data } = await axios.post('/api/contact', {
          name,
          email,
          subject,
          message,
        })
        resetForm()
        setLoading(false)
        return setSubmitting(false)
      }}
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        /* and other goodies */
      }) => (
        <>

          {loading && <Loading />}
          <motion.form
            className="form"
            onSubmit={handleSubmit}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, delay: 0.5 },
            }}
            initial={{ x: '-100%', opacity: 0 }}
          >
            <Input
              id="name"
              name="name"
              icon={<MdAccountCircle />}
              type="text"
              value={values.name}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <Input
              type="email"
              id="email"
              name="email"
              icon={<MdEmail />}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Input
              id="subject"
              name="subject"
              icon={<MdSubject />}
              type="text"
              value={values.subject}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <div className="input-container textarea">
              <textarea
                id="message"
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
              ></textarea>
              <div className={`input ${values.message && 'text'}`}>
                <label className="label-name" htmlFor="message">
                  message
                </label>
              </div>
            </div>

            <button className="btn" type="submit">
              SEND
            </button>
          </motion.form>
        </>
      )}
    </Formik>
  )
}
