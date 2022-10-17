import React from 'react'
import PropTypes from 'prop-types'
import {
  IconClose,
  IconDataCamp,
  IconFigma,
  IconGitHub,
  IconInstagram,
  IconLink,
  IconLogo,
  IconPython,
  IconUdemy,
} from '@components/icons'

const Icon = ({ name }) => {
  switch (name) {
    case 'Close':
      return <IconClose />
    case 'DataCamp':
      return <IconDataCamp />
    case 'Figma':
      return <IconFigma />
    case 'GitHub':
      return <IconGitHub />
    case 'Instagram':
      return <IconInstagram />
    case 'Link':
      return <IconLink />
    case 'Logo':
      return <IconLogo />
    case 'Python':
      return <IconPython />
    case 'Udemy':
      return <IconUdemy />
    // change
    default:
      return <IconLogo />
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Icon
