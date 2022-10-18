import React from 'react'
import PropTypes from 'prop-types'
import {
  IconAppStore,
  IconClose,
  IconDataCamp,
  IconFigma,
  IconGitHub,
  IconInstagram,
  IconLink,
  IconLogo,
  IconPlayStore,
  IconPython,
  IconUdemy,
} from '@components/icons'

const Icon = ({ name }) => {
  switch (name) {
    case 'AppStore':
      return <IconAppStore />
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
    case 'PlayStore':
      return <IconPlayStore />
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
