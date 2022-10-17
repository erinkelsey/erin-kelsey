import React from 'react'
import PropTypes from 'prop-types'
import {
  // IconAppStore,
  // IconBookmark,
  // IconCodepen,
  IconDataCamp,
  // IconExternal,
  IconFigma,
  // IconFolder,
  // IconFork,
  IconGitHub,
  IconInstagram,
  IconLink,
  // IconLinkedin,
  // IconLoader,
  IconLogo,
  // IconPlayStore,
  // IconStar,
  // IconTwitter,
  IconUdemy,
} from '@components/icons'

const Icon = ({ name }) => {
  switch (name) {
    // case 'AppStore':
    //   return <IconAppStore />;
    // case 'Bookmark':
    //   return <IconBookmark />;
    case 'DataCamp':
      return <IconDataCamp />
    // case 'External':
    //   return <IconExternal />;
    case 'Figma':
      return <IconFigma />
    // case 'Folder':
    //   return <IconFolder />;
    // case 'Fork':
    //   return <IconFork />;
    case 'GitHub':
      return <IconGitHub />
    case 'Instagram':
      return <IconInstagram />
    case 'Link':
      return <IconLink />
    // case 'Linkedin':
    //   return <IconLinkedin />;
    // case 'Loader':
    //   return <IconLoader />;
    case 'Logo':
      return <IconLogo />
    // case 'PlayStore':
    //   return <IconPlayStore />;
    // case 'Star':
    //   return <IconStar />;
    // case 'Twitter':
    //   return <IconTwitter />;
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
