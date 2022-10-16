import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Icon } from '@components/icons'
import { socialMedia, websiteLinks } from '@config'

const StyledFooter = styled.footer`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`

const StyledSocialLinks = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 270px;
    margin: 0 auto 10px;
    color: var(--light-slate);
  }

  ul {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    a {
      padding: 10px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`

const StyledAuthor = styled.div`
  ${({ theme }) => theme.mixins.flexCenter}
  color: var(--light-slate);
  font-family: var(--font-body);
  font-size: var(--fz-xxs);
  line-height: 1;
  padding: 10px;

  ul {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    a {
      padding-left: 5px;
      svg {
        width: 15px;
        height: 15px;
      }
    }
  }
`

const StyledCredit = styled.div`
  color: var(--light-slate);
  font-family: var(--font-body);
  font-size: var(--fz-xxxs);
  line-height: 1;
`

const Footer = () => {
  return (
    <StyledFooter>
      <StyledSocialLinks>
        <ul>
          {socialMedia &&
            socialMedia.map(({ name, url }, i) => (
              <li key={i}>
                <a href={url} aria-label={name}>
                  <Icon name={name} />
                </a>
              </li>
            ))}
        </ul>
      </StyledSocialLinks>

      <StyledAuthor tabindex='-1'>
        <div>Designed &amp; Built by Erin Kelsey</div>
        <ul>
          {websiteLinks &&
            websiteLinks.map(({ name, url }, i) => (
              <li key={i}>
                <a href={url} aria-label={name}>
                  <Icon name={name} />
                </a>
              </li>
            ))}
        </ul>
      </StyledAuthor>

      <StyledCredit>
        <div>
          Thank you <a href='https://brittanychiang.com/'>Brittany Chiang</a>{' '}
          for the design inspiration!
        </div>
      </StyledCredit>
    </StyledFooter>
  )
}

Footer.propTypes = {
  githubInfo: PropTypes.object,
}

export default Footer
