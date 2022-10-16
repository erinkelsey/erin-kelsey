module.exports = {
  email: 'erin@erinkelsey.io',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/erinkelsey',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/erinkelsey_',
    },
    {
      name: 'DataCamp',
      url: 'https://app.datacamp.com/profile/erinkelsey',
    },
    {
      name: 'Udemy',
      url: 'https://www.udemy.com/user/erin-kelsey-2',
    },
  ],

  websiteLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/erinkelsey/erin-kelsey',
    },
    {
      name: 'Figma',
      url: 'https://www.figma.com/file/D2FLeSsLc2MCPhnY8mdTxB/UI%2FUX?node-id=6%3A51',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Work',
      url: '/#work',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64FFB5',
    pink: '#F1A4FE',
    darkPurple: '#14002D',
    purple: '#210049',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
}
