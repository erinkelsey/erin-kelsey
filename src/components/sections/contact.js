import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import { srConfig } from '@config'
import sr from '@utils/sr'
import formValidation from '../../utils/formValidation'
import { usePrefersReducedMotion } from '@hooks'

const StyledContactSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  margin: auto;
  min-height: 90vh;
  max-height: 1000px;
  width: 100%;

  h2 {
    text-align: center;
  }

  .section-subheading {
    text-align: center;
    max-width: 700px;
    padding-bottom: 20px;
  }

  .submission-feedback {
    color: var(--green);
    font-size: var(--fz-md);
    padding-bottom: 10px;
    text-align: center;
    max-width: 60%;

    @media (max-width: 900px) {
      width: 100%;
    }
  }

  .submission-feedback-error {
    color: var(--pink);
  }
`

const StyledContactField = styled.div`
  width: 60%;
  text-align: center;
  margin: 0 0 10px 0;

  @media (max-width: 900px) {
    width: 100%;
  }

  .input-label {
    font-family: var(--font-body);
    color: var(--green);
    margin: 0 0 5px 0;
    text-align: left;
  }

  .contact-input {
    width: 100%;
    background-color: var(--light-slate);
    color: var(--darkest-purple);
    font-family: var(--font-label);
    padding: 10px;
    border: 1px solid transparent;
    border-radius: var(--border-radius);
    font-size: var(--fz-md);
  }

  .contact-textarea {
    min-height: 70px;
  }

  .text-field-error {
    color: var(--pink);
    font-size: var(--fz-xxs);
    margin: 2px 0px 2px 0px;
    text-align: left;
  }
`

const StyledSendButton = styled.button`
  ${({ theme }) => theme.mixins.bigButton};
  margin: 20px 0px;
  color: var(--green);
  border: 1px solid var(--green);
  width: 40%;
  font-size: var(--fz-lg);
  text-align: center;
  padding: 1rem 1.25rem;

  &:hover,
  &:focus,
  &:active,
  &:disabled {
    color: var(--green);
    background-color: var(--green-tint);
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

const REQUIRED_FIELDS = ['name', 'email', 'message']

const MAX_LENGTH_FIELDS = [
  { name: 50 },
  { email: 254 },
  { phoneNumber: 20 },
  { message: 5000 },
]

const EMAIL_FIELDS = ['email']

const INITIAL_STATE = {
  name: '',
  email: '',
  phoneNumber: '',
  message: '',
}

const Input = ({ id, title, required = true, value, onChange, error }) => (
  <StyledContactField>
    <h5 className='input-label'>
      {title}
      {required ? '*' : ''}
    </h5>
    <input
      type='text'
      className='contact-input'
      id={id}
      value={value}
      onChange={onChange}
    />
    {error && <p className='text-field-error'>{error}</p>}
  </StyledContactField>
)

const TextArea = ({ value, onChange, error }) => (
  <StyledContactField>
    <h5 className='input-label'>Message*</h5>
    <textarea
      id='message'
      className='contact-input contact-textarea'
      rows={5}
      value={value}
      onChange={onChange}
    ></textarea>
    {error && <p className='text-field-error'>{error}</p>}
  </StyledContactField>
)

const Contact = () => {
  const revealContainer = useRef(null)
  const prefersReducedMotion = usePrefersReducedMotion()
  const [values, setValues] = useState(INITIAL_STATE)
  const [formErrors, setErrors] = useState({})
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [submissionFeedback, setSubmissionFeedback] = useState(null)
  const [submissionHasError, setSubmissionHasError] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }

    sr.reveal(revealContainer.current, srConfig())
  }, [prefersReducedMotion])

  const handleSetValue = (key, value) => {
    setValues((prevState) => ({
      ...prevState,
      [key]: value,
    }))
  }

  const handleSubmit = async () => {
    setSubmissionHasError(false)
    setSubmissionFeedback(null)

    const n_formErrors = formValidation(
      values,
      REQUIRED_FIELDS,
      MAX_LENGTH_FIELDS,
      EMAIL_FIELDS
    )

    setErrors(n_formErrors)

    // no formErrors -> submit values
    if (Object.keys(n_formErrors).length === 0) {
      const formData = new FormData()

      Object.keys(values).forEach((key) => formData.append(key, values[key]))

      try {
        setFormSubmitted(true)
        const response = await axios.post(
          process.env.GATSBY_EMJINX_API_URL,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              'EMJINX-API-KEY': process.env.GATSBY_EMJINX_API_KEY,
            },
          }
        )

        if (response.data['success']) {
          setSubmissionFeedback('Your message has been sent!')
          setValues(INITIAL_STATE)
        }
      } catch (error) {
        setFormSubmitted(false)
        setSubmissionHasError(true)
        setSubmissionFeedback('Unable to send your message: ' + error.message)
      }
    }
  }

  return (
    <StyledContactSection ref={revealContainer}>
      <h2 className='section-heading'>Contact</h2>
      <hr className='section-heading-underline section-heading-center' />
      <p className='section-subheading'>
        I would love to hear from you! Don’t hesitate to reach out.
      </p>
      <Input
        id='name'
        title='Name'
        value={values.name}
        onChange={(e) => handleSetValue('name', e.target.value)}
        error={formErrors['name']}
      />
      <Input
        id='email'
        title='Email'
        value={values.email}
        onChange={(e) => handleSetValue('email', e.target.value)}
        error={formErrors['email']}
      />
      <Input
        id='phone'
        title='Phone'
        required={false}
        value={values.phoneNumber}
        onChange={(e) => handleSetValue('phoneNumber', e.target.value)}
        error={formErrors['phoneNumber']}
      />
      <TextArea
        value={values.message}
        onChange={(e) => handleSetValue('message', e.target.value)}
        error={formErrors['message']}
      />
      <StyledSendButton disabled={formSubmitted} onClick={handleSubmit}>
        SUBMIT
      </StyledSendButton>

      {submissionFeedback && (
        <div
          className={`submission-feedback ${
            submissionHasError ? 'submission-feedback-error' : ''
          }`}
        >
          {submissionFeedback}
        </div>
      )}
    </StyledContactSection>
  )
}

export default Contact
