import React, { useState, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styled from 'styled-components'
import { navDelay, loaderDelay } from '@utils'
import { usePrefersReducedMotion } from '@hooks'
// import { email } from '@config';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;

  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }

  @media (max-height: 500px) {
    padding-top: 50px;
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-label);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin: 15px 0;
    line-height: 0.9;
  }

  p {
    // margin: 30px 0 0;
    max-width: 1000px;
  }
`

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay)
    return () => clearTimeout(timeout)
  }, [prefersReducedMotion])

  const one = <h1>Hi, my name is</h1>
  const two = <h2 className='big-heading'>Erin Kelsey</h2>
  const three = (
    <h3 className='medium-heading'>Building and creating is what I do.</h3>
  )
  const four = (
    <>
      <p>
        I am a senior software engineer (and beginner ui/ux designer), focused
        on bringing engaging digital products to life for web and mobile.
      </p>
    </>
  )

  const items = [one, two, three, four]

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames='fadeup' timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  )
}

export default Hero
