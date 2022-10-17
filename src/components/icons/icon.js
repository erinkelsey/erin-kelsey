import React from 'react'
import PropTypes from 'prop-types'
import {
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
    // default:
    //   return <IconExternal />;
    default:
      return <IconLogo />
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Icon
