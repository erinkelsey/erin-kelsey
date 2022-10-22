import React from 'react'
import PropTypes from 'prop-types'
import {
  IconActiveDirectory,
  IconAndroid,
  IconAndroidStudio,
  IconApollo,
  IconAppStore,
  IconAWS,
  IconBash,
  IconBootstrap,
  IconBulma,
  IconCelery,
  IconCitrix,
  IconClose,
  IconCodeMagic,
  IconCSharp,
  IconCSS,
  IconDart,
  IconDataCamp,
  IconDataScience,
  IconDenoJS,
  IconDjango,
  IconDocker,
  IconEclipse,
  IconExchange,
  IconExpress,
  IconFigma,
  IconFirebase,
  IconFlask,
  IconFlutter,
  IconGatsbyJS,
  IconGCP,
  IconGitHub,
  IconGraphQL,
  IconHeroku,
  IconHTML,
  IconIllustrator,
  IconInsomnia,
  IconInstagram,
  IconIOS,
  IconJavaScript,
  IconJest,
  IconJinja,
  IconJira,
  IconJupyter,
  IconLightroom,
  IconLink,
  IconLogo,
  IconMaterialUI,
  IconMobileIron,
  IconMongoDB,
  IconMySQL,
  IconNetlify,
  IconNodeJS,
  IconNPM,
  IconOracle,
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
  IconSharePoint,
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
    case 'Active Directory':
      return <IconActiveDirectory />
    case 'Android':
      return <IconAndroid />
    case 'Android Studio':
      return <IconAndroidStudio />
    case 'Apollo':
      return <IconApollo />
    case 'App Store Connect':
      return <IconAppStore />
    case 'AWS':
      return <IconAWS />
    case 'Bash':
      return <IconBash />
    case 'Bootstrap':
      return <IconBootstrap />
    case 'Bulma':
      return <IconBulma />
    case 'Celery':
      return <IconCelery />
    case 'Citrix':
      return <IconCitrix />
    case 'Close':
      return <IconClose />
    case 'CodeMagic':
      return <IconCodeMagic />
    case 'C#':
      return <IconCSharp />
    case 'CSS':
      return <IconCSS />
    case 'Dart':
      return <IconDart />
    case 'DataCamp':
      return <IconDataCamp />
    case 'Data Science':
      return <IconDataScience />
    case 'DenoJS':
      return <IconDenoJS />
    case 'Django':
      return <IconDjango />
    case 'Docker':
      return <IconDocker />
    case 'Eclipse':
      return <IconEclipse />
    case 'Exchange':
      return <IconExchange />
    case 'Express':
      return <IconExpress />
    case 'Figma':
      return <IconFigma />
    case 'Firebase':
      return <IconFirebase />
    case 'Flask':
      return <IconFlask />
    case 'Flutter':
      return <IconFlutter />
    case 'GatsbyJS':
      return <IconGatsbyJS />
    case 'Google Cloud Platform':
      return <IconGCP />
    case 'GitHub':
      return <IconGitHub />
    case 'GraphQL':
      return <IconGraphQL />
    case 'Heroku':
      return <IconHeroku />
    case 'HTML':
      return <IconHTML />
    case 'Illustrator':
      return <IconIllustrator />
    case 'Insomnia':
      return <IconInsomnia />
    case 'Instagram':
      return <IconInstagram />
    case 'iOS':
      return <IconIOS />
    case 'JavaScript':
      return <IconJavaScript />
    case 'Jest':
      return <IconJest />
    case 'Jinja':
      return <IconJinja />
    case 'Jira':
      return <IconJira />
    case 'Jupyter':
      return <IconJupyter />
    case 'Lightroom':
      return <IconLightroom />
    case 'Link':
      return <IconLink />
    case 'Logo':
      return <IconLogo />
    case 'Material UI':
      return <IconMaterialUI />
    case 'Microsoft SQL Server':
      return <IconSQLServer />
    case 'MobileIron':
      return <IconMobileIron />
    case 'MongoDB':
      return <IconMongoDB />
    case 'MySQL':
      return <IconMySQL />
    case 'Netlify':
      return <IconNetlify />
    case 'NodeJS':
      return <IconNodeJS />
    case 'npm':
      return <IconNPM />
    case 'SharePoint':
      return <IconSharePoint />
    case 'Oracle':
      return <IconOracle />
    case 'Photoshop':
      return <IconPhotoshop />
    case 'Google Play Console':
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
    case 'React Router':
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
    case 'SQL Developer':
      return <IconSQL />
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
    case 'Travis CI':
      return <IconTravisCI />
    case 'TypeScript':
      return <IconTypeScript />
    case 'Udemy':
      return <IconUdemy />
    case 'Visual Studio':
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
