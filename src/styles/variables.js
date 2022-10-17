import { css } from 'styled-components'

const variables = css`
  :root {
    --darkest-purple: #14002d; // --dark-navy
    --purple: #210049; // --navy
    --light-purple: #3e1a68; // --light-navy
    --lightest-purple: #56357e // --lightest-navy
    --purple-shadow: rgba(20, 0, 45, 0.7); // --navy-shadow
    --purple-shadow-nav: rgba(20, 0, 45, 0.85);
    --dark-slate: #946c90;
    --slate: #bc9cb9;
    --light-slate: #ccc0cb; 
    --lightest-slate: #e9d9e7;
    --green: #64ffb5;
    --green-tint: rgba(100, 255, 181, 0.1);
    --pink: #f1a4fe;
    --pink-tint: rgba(241, 164, 254, 0.1);

    --font-sans: 'Quicksand', 'Inter', 'San Francisco', 'SF Pro Text',
      -apple-system, system-ui, sans-serif;
    --font-mono: 'Fira Code', 'SF Mono', 'Fira Mono', 'Roboto Mono', monospace;

    --font-heading: 'Quicksand', 'Inter', 'San Francisco', 'SF Pro Text',
      -apple-system, system-ui, sans-serif;
    --font-body: 'Inter', 'Quicksand', 'San Francisco', 'SF Pro Text',
      -apple-system, system-ui, sans-serif;
    --font-label: 'Fira Code', 'SF Mono', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxxxs: 8px;
    --fz-xxxs: 10px;
    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading-xs: 24px;
    --fz-heading-sm: 32px;
    --fz-heading-md: 40px;
    --fz-heading-lg: 48px;
    --fz-heading-xl: 56px;
    --fz-heading-xxl: 64px;
    --fz-heading-xxxl: 72px;
    --fz-heading-xxxxl: 80px;

    --border-radius: 10px;
    --modal-border-radius: 20px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 220px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s,
      transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`

export default variables
