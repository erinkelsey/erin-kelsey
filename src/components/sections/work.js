import React, { useState, useEffect, useRef } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { CSSTransition } from 'react-transition-group'
import styled from 'styled-components'
import { Icon } from '@components/icons'
import { WorkOther, SkillIcon } from '@components'
import { srConfig } from '@config'
import { KEY_CODES } from '@utils'
import sr from '@utils/sr'
import { usePrefersReducedMotion } from '@hooks'

const StyledWorkSection = styled.section`
  max-width: 900px;

  .inner {
    display: flex;

    @media (max-width: 768px) {
      display: block;
    }

    // Prevent container from jumping
    @media (min-width: 769px) {
      min-height: 700px;
    }
  }
`

const StyledTitle = styled.div`
  ${({ theme }) => theme.mixins.flexBetween};

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`

const StyledTabList = styled.div`
  position: relative;
  z-index: 3;
  width: max-content;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (max-width: 768px) {
    display: flex;
    overflow-x: auto;
    width: calc(100% + 100px);
    padding-left: 50px;
    margin-left: -50px;
    margin-bottom: 30px;
  }
  @media (max-width: 480px) {
    width: calc(100% + 50px);
    padding-left: 25px;
    margin-left: -25px;
  }

  li {
    &:first-of-type {
      @media (max-width: 768px) {
        margin-left: 50px;
      }
      @media (max-width: 480px) {
        margin-left: 25px;
      }
    }
    &:last-of-type {
      @media (max-width: 768px) {
        padding-right: 50px;
      }
      @media (max-width: 480px) {
        padding-right: 25px;
      }
    }
  }
`

const StyledTabButton = styled.button`
  ${({ theme }) => theme.mixins.link};
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--tab-height);
  padding: 0 20px 2px;
  border-left: 2px solid var(--lightest-purple);
  background-color: transparent;
  color: ${({ isActive }) => (isActive ? 'var(--green)' : 'var(--slate)')};
  font-family: var(--font-label);
  font-size: var(--fz-xs);
  text-align: left;
  white-space: nowrap;

  @media (max-width: 768px) {
    padding: 0 15px 2px;
  }
  @media (max-width: 768px) {
    ${({ theme }) => theme.mixins.flexCenter};
    min-width: 220px;
    padding: 0 15px;
    border-left: 0;
    border-bottom: 2px solid var(--lightest-purple);
    text-align: center;
  }

  &:hover,
  &:focus {
    background-color: var(--light-purple);
  }
`

const StyledHighlight = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 2px;
  height: var(--tab-height);
  border-radius: var(--border-radius);
  background: var(--green);
  transform: translateY(
    calc(${({ activeTabId }) => activeTabId} * var(--tab-height))
  );
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;

  @media (max-width: 768px) {
    top: auto;
    bottom: 0;
    width: 100%;
    max-width: var(--tab-width);
    height: 2px;
    margin-left: 50px;
    transform: translateX(
      calc(${({ activeTabId }) => activeTabId} * var(--tab-width))
    );
  }
  @media (max-width: 480px) {
    margin-left: 25px;
  }
`

const StyledTabPanels = styled.div`
  position: relative;
  width: 100%;
  margin-left: 20px;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`

const StyledTabPanel = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 5px;

  ul {
    ${({ theme }) => theme.mixins.fancyList};
  }

  h3 {
    margin-bottom: 2px;
    font-size: var(--fz-heading-xs);
    color: var(--green);
    line-height: 1.3;
  }

  h4 {
    font-size: var(--fx-lg);
    color: var(--pink);
    margin-top: 20px;
    margin-bottom: 0;

    a {
      padding: 10px;
      color: var(--slate);

      &:hover,
      &:focus {
        transform: translateY(-3px);
        color: var(--pink);
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }

  .range {
    margin: 0 0 20px;
    color: var(--light-slate);
    font-family: var(--font-label);
    font-size: var(--fz-sm);
  }

  .description {
    font-size: var(--fz-md);
  }

  .header {
    margin-bottom: 10px;
  }
`

const StyledTechnologies = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 2fr);
  grid-gap: 10px;
`

const Work = () => {
  const data = useStaticQuery(graphql`
    query {
      work: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/work/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              company
              location
              range
              url
              description
              technologies
            }
            html
          }
        }
      }
    }
  `)

  const workData = data.work.edges

  const [activeTabId, setActiveTabId] = useState(0)
  const [tabFocus, setTabFocus] = useState(null)
  const tabs = useRef([])
  const revealContainer = useRef(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }

    sr.reveal(revealContainer.current, srConfig())
  }, [prefersReducedMotion])

  const focusTab = () => {
    if (tabs.current[tabFocus]) {
      tabs.current[tabFocus].focus()
      return
    }
    // If we're at the end, go to the start
    if (tabFocus >= tabs.current.length) {
      setTabFocus(0)
    }
    // If we're at the start, move to the end
    if (tabFocus < 0) {
      setTabFocus(tabs.current.length - 1)
    }
  }

  // Only re-run the effect if tabFocus changes
  useEffect(() => focusTab())

  // Focus on tabs when using up & down arrow keys
  const onKeyDown = (e) => {
    switch (e.key) {
      case KEY_CODES.ARROW_UP: {
        e.preventDefault()
        setTabFocus(tabFocus - 1)
        break
      }

      case KEY_CODES.ARROW_DOWN: {
        e.preventDefault()
        setTabFocus(tabFocus + 1)
        break
      }

      default: {
        break
      }
    }
  }

  return (
    <StyledWorkSection id='work' ref={revealContainer}>
      <StyledTitle>
        <div></div>
        <div>
          <h2 className='section-heading section-heading-right'>Work</h2>
          <hr className='section-heading-underline' />
        </div>
      </StyledTitle>

      <div className='inner'>
        <StyledTabList
          role='tablist'
          aria-label='Work tabs'
          onKeyDown={(e) => onKeyDown(e)}
        >
          {workData &&
            workData.map(({ node }, i) => {
              const { company } = node.frontmatter
              return (
                <StyledTabButton
                  key={i}
                  isActive={activeTabId === i}
                  onClick={() => setActiveTabId(i)}
                  ref={(el) => (tabs.current[i] = el)}
                  id={`tab-${i}`}
                  role='tab'
                  tabIndex={activeTabId === i ? '0' : '-1'}
                  aria-selected={activeTabId === i ? true : false}
                  aria-controls={`panel-${i}`}
                >
                  <span>{company}</span>
                </StyledTabButton>
              )
            })}
          <StyledHighlight activeTabId={activeTabId} />
        </StyledTabList>
        <StyledTabPanels>
          {workData &&
            workData.map(({ node }, i) => {
              const { frontmatter, html } = node
              const {
                title,
                url,
                company,
                range,
                location,
                description,
                technologies,
              } = frontmatter

              return (
                <CSSTransition
                  key={i}
                  in={activeTabId === i}
                  timeout={250}
                  classNames='fade'
                >
                  <StyledTabPanel
                    id={`panel-${i}`}
                    role='tabpanel'
                    tabIndex={activeTabId === i ? '0' : '-1'}
                    aria-labelledby={`tab-${i}`}
                    aria-hidden={activeTabId !== i}
                    hidden={activeTabId !== i}
                  >
                    {company !== 'Other' ? (
                      <>
                        <h3>{title}</h3>

                        <p className='range'>
                          {range} ({location})
                        </p>

                        <h4>
                          {company}
                          <a
                            href={url}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <Icon name='Link' />
                          </a>
                        </h4>

                        <p className='description'>{description}</p>

                        <h4 className='header'>Responsibilities</h4>
                        <div dangerouslySetInnerHTML={{ __html: html }} />

                        <h4 className='header'>Technologies</h4>
                        <StyledTechnologies>
                          {technologies.map((technology) => (
                            <SkillIcon
                              key={`${company}-${technology}`}
                              name={technology}
                            />
                          ))}
                        </StyledTechnologies>
                      </>
                    ) : (
                      <WorkOther />
                    )}
                  </StyledTabPanel>
                </CSSTransition>
              )
            })}
        </StyledTabPanels>
      </div>
    </StyledWorkSection>
  )
}

export default Work
