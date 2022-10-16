import React, { useEffect, useRef } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { srConfig } from '@config'
import sr from '@utils/sr'
import { usePrefersReducedMotion } from '@hooks'

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--purple);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`

const About = () => {
  const revealContainer = useRef(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }

    sr.reveal(revealContainer.current, srConfig())
  }, [prefersReducedMotion])

  return (
    <StyledAboutSection id='about' ref={revealContainer}>
      <h2 className='section-heading'>About</h2>
      <hr className='section-heading-underline' />

      <div className='inner'>
        <div>
          <p>
            Hi there! Thank you so much for taking the time to visit my website.
            I am currently looking for new opportunities as a software engineer.
          </p>

          <p>
            I have worked for a variety of different companies, ever since
            graduating from the University of Saskatchewan, with a B.Sc. Honours
            in Computer Science. Some of my previous employers include, a
            leading fintech solutions provider, a small-scale startup, and a
            large governmental organization. As a result of my varied work
            experience, my skills, abilities and knowledge are wide-ranging and
            diverse.
          </p>

          <p>
            I have been a digital nomad for over five years, living and working
            all across North America, Asia, and more! Life on the road, and
            working remotely, have led me to become incredibly independent,
            motivated and resourceful.
          </p>

          <p>
            As a lifelong learner, I am always diving into new technologies and
            frameworks, or picking up new skills, hobbies and interests, as I
            navigate the globe. Recently, I have been learning data science and
            engineering, ui/ux design, Typescript, WordPress, Spanish and golf!
          </p>
        </div>

        <StyledPic>
          <div className='wrapper'>
            <StaticImage
              className='img'
              src='../../images/profile.jpg'
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt='Profile Picture'
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  )
}

export default About
