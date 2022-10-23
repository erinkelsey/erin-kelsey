import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { srConfig } from '@config'
import sr from '@utils/sr'
import { usePrefersReducedMotion } from '@hooks'

const StyledPhilosophySection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  margin: auto;
  height: 80vh;

  h2 {
    text-align: center;
  }

  p {
    text-align: center;
    max-width: 700px;
  }
`

const Philosophy = () => {
  const revealContainer = useRef(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }

    sr.reveal(revealContainer.current, srConfig())
  }, [prefersReducedMotion])

  return (
    <StyledPhilosophySection id='philosophy' ref={revealContainer}>
      <h2 className='section-heading'>Philosophy</h2>
      <hr className='section-heading-underline section-heading-center' />
      <p>
        There isn't a problem I can't solve, or a challenge I can't overcome,
        whether in life, or in front of a computer.
      </p>
    </StyledPhilosophySection>
  )
}

export default Philosophy
