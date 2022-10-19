import React from 'react'
import PropTypes from 'prop-types'
import {
  IconActiveDirectory,
  IconAndroid,
  IconApollo,
  IconAppStore,
  IconAWS,
  IconBash,
  IconBootstrap,
  IconCelery,
  IconClose,
  IconCodeMagic,
  IconCSS,
  IconDart,
  IconDataCamp,
  IconDjango,
  IconDocker,
  IconFigma,
  IconFlutter,
  IconGatsbyJS,
  IconGitHub,
  IconGraphQL,
  IconHTML,
  IconIllustrator,
  IconInstagram,
  IconIOS,
  IconJavaScript,
  IconLightroom,
  IconLink,
  IconLogo,
  IconMobileIron,
  IconNumpy,
  IconOracle,
  IconPandas,
  IconPhotoshop,
  IconPlayStore,
  IconPostgreSQL,
  IconPostman,
  IconPowershell,
  IconPython,
  IconReact,
  IconReactRouter,
  IconRedis,
  IconRedux,
  IconREST,
  IconSASS,
  IconSQL,
  IconSQLServer,
  IconStripe,
  IconStyledComponents,
  IconSwift,
  IconTableau,
  IconTachyons,
  IconTerminal,
  IconTravisCI,
  IconTypeScript,
  IconUdemy,
  IconVisualStudio,
  IconVSCode,
  IconWindows,
  IconWordPress,
  IconXCode,
  IconXD,
} from '@components/icons'

const Icon = ({ name }) => {
  switch (name) {
    case 'ActiveDirectory':
      return <IconActiveDirectory />
    case 'Android':
      return <IconAndroid />
    case 'Apollo':
      return <IconApollo />
    case 'AppStore':
      return <IconAppStore />
    case 'AWS':
      return <IconAWS />
    case 'Bash':
      return <IconBash />
    case 'Bootstrap':
      return <IconBootstrap />
    case 'Celery':
      return <IconCelery />
    case 'Close':
      return <IconClose />
    case 'CodeMagic':
      return <IconCodeMagic />
    case 'CSS':
      return <IconCSS />
    case 'Dart':
      return <IconDart />
    case 'DataCamp':
      return <IconDataCamp />
    case 'Django':
      return <IconDjango />
    case 'Docker':
      return <IconDocker />
    case 'Figma':
      return <IconFigma />
    case 'Flutter':
      return <IconFlutter />
    case 'GatsbyJS':
      return <IconGatsbyJS />
    case 'GitHub':
      return <IconGitHub />
    case 'GraphQL':
      return <IconGraphQL />
    case 'HTML':
      return <IconHTML />
    case 'Illustrator':
      return <IconIllustrator />
    case 'Instagram':
      return <IconInstagram />
    case 'IOS':
      return <IconIOS />
    case 'JavaScript':
      return <IconJavaScript />
    case 'Lightroom':
      return <IconLightroom />
    case 'Link':
      return <IconLink />
    case 'Logo':
      return <IconLogo />
    case 'MobileIron':
      return <IconMobileIron />
    case 'Numpy':
      return <IconNumpy />
    case 'Oracle':
      return <IconOracle />
    case 'Pandas':
      return <IconPandas />
    case 'Photoshop':
      return <IconPhotoshop />
    case 'PlayStore':
      return <IconPlayStore />
    case 'PostgreSQL':
      return <IconPostgreSQL />
    case 'Postman':
      return <IconPostman />
    case 'Powershell':
      return <IconPowershell />
    case 'Python':
      return <IconPython />
    case 'React':
      return <IconReact />
    case 'ReactRouter':
      return <IconReactRouter />
    case 'Redis':
      return <IconRedis />
    case 'Redux':
      return <IconRedux />
    case 'REST':
      return <IconREST />
    case 'SASS':
      return <IconSASS />
    case 'SQL':
      return <IconSQL />
    case 'SQLServer':
      return <IconSQLServer />
    case 'Stripe':
      return <IconStripe />
    case 'StyledComponents':
      return <IconStyledComponents />
    case 'Swift':
      return <IconSwift />
    case 'Tableau':
      return <IconTableau />
    case 'Tachyons':
      return <IconTachyons />
    case 'Terminal':
      return <IconTerminal />
    case 'TravisCI':
      return <IconTravisCI />
    case 'TypeScript':
      return <IconTypeScript />
    case 'Udemy':
      return <IconUdemy />
    case 'VisualStudio':
      return <IconVisualStudio />
    case 'VSCode':
      return <IconVSCode />
    case 'Windows':
      return <IconWindows />
    case 'WordPress':
      return <IconWordPress />
    case 'XCode':
      return <IconXCode />
    case 'XD':
      return <IconXD />
    // change
    default:
      return <IconLogo />
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Icon
