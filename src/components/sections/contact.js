import React, { useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { srConfig } from '@config'
import sr from '@utils/sr'
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

  p {
    text-align: center;
    max-width: 700px;
    margin-bottom: 30px;
  }

  .contact-input {
    width: 60%;
    background-color: var(--light-slate);
    color: var(--darkest-purple);
    font-family: var(--font-label);
    padding: 15px;
    border: none;
    border-radius: var(--border-radius);
    margin: 10px;
    font-size: var(--fz-lg);

    @media (max-width: 768px) {
      width: 100%;
      font-size: var(--fz-md);
      padding: 10px;
    }

    ::placeholder {
      color: var(--purple);
      opacity: 1;
    }
  }

  .contact-textarea {
    min-height: 70px;
  }
`

const StyledSendButton = styled(Link)`
  ${({ theme }) => theme.mixins.bigButton};
  margin-top: 40px;
  color: var(--green);
  border: 1px solid var(--green);
  width: 40%;
  font-size: var(--fz-lg);
  text-align: center;

  &:hover,
  &:focus,
  &:active {
    color: var(--green);
    background-color: var(--green-tint);
    outline: none;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

const Contact = () => {
  const revealContainer = useRef(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }

    sr.reveal(revealContainer.current, srConfig())
  }, [prefersReducedMotion])

  return (
    <StyledContactSection id='philosophy' ref={revealContainer}>
      <h2 className='section-heading'>Contact</h2>
      <hr className='section-heading-underline section-heading-center' />
      <p>I would love to hear from you! Don’t hesitate to reach out.</p>
      <input className='contact-input' type='text' placeholder='Name' />
      <input className='contact-input' type='text' placeholder='Email' />
      <textarea
        className='contact-input contact-textarea'
        placeholder='Message'
        rows='5'
      ></textarea>
      <StyledSendButton to='/'>Send</StyledSendButton>
    </StyledContactSection>
  )
}

export default Contact
