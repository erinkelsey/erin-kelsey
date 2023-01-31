import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import anime from 'animejs'
import styled from 'styled-components'
import { Icon } from '@components/icons'

const StyledLoader = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: var(--darkest-purple);
  z-index: 99;

  .logo-wrapper {
    width: max-content;
    max-width: 150px;
    transition: var(--transition);
    margin-bottom: 100px;
    opacity: ${(props) => (props.isMounted ? 1 : 0)};
    svg {
      display: block;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      fill: none;
      user-select: none;
    }
  }
`

const Loader = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false)

  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    })

    loader
      .add({
        targets: '#logo #lines path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1000,
        opacity: 1,
        delay: function (el, i) {
          return i * 250
        },
        direction: 'normal',
        loop: true,
      })
      .add({
        targets: '#logo',
        delay: 1000,
        duration: 300,
        easing: 'easeInOutQuart',
        opacity: 0,
        scale: 0.1,
      })
  }

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10)
    animate()
    return () => clearTimeout(timeout)
  })

  return (
    <StyledLoader className='loader' isMounted={isMounted}>
      <Helmet bodyAttributes={{ class: `hidden` }} />

      <div className='logo-wrapper'>
        <Icon name='Loader' />
      </div>
    </StyledLoader>
  )
}

Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired,
}

export default Loader
