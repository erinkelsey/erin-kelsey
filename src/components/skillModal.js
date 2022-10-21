import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Modal from 'react-modal'

import { Icon } from '@components/icons'
import { Usage, SkillModalFeatured, SkillIcon } from '@components'

const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.58)',
    zIndex: '9999',
  },
  content: {
    position: 'relative',
    top: 'auto',
    left: 'auto',
    right: 'auto',
    bottom: 'auto',
    border: 0,
    backgroundColor: 'var(--purple)',
  },
}

const StyledModalHeader = styled.div`
  ${({ theme }) => theme.mixins.flexBetween};
  width: 100%;

  h3 {
    font-size: var(--fz-heading-sm);
    color: var(--green);
  }

  svg {
    width: 24px;
    height: 24px;

    &:hover,
    &:focus {
      transition: var(--transition);
      transform: translateY(-3px);
      color: var(--pink);
      cursor: pointer;
    }
  }
`

const StyledModalBody = styled.div`
  ul {
    ${({ theme }) => theme.mixins.fancyList};

    li {
      margin-bottom: 5px;
    }
  }

  .modal-section-header {
    color: var(--pink);
    margin: 30px 0 10px;
  }

  h5 {
    color: var(--slate);
    font-size: var(--fz-md);
    font-family: var(--font-label);
  }

  a {
    &:hover,
    &:focus {
      transition: var(--transition);
      transform: translateY(-3px);
      color: var(--pink);
    }
  }
`

const StyledRelated = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 2fr);
  grid-gap: 10px;
`

const SkillModal = ({ name, isOpen, toggle }) => {
  const data = useStaticQuery(graphql`
    query {
      skills: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "content/skills/" } }
      ) {
        edges {
          node {
            frontmatter {
              name
              usage
              used
              featured
              practice {
                name
                projects
              }
              related
            }
          }
        }
      }
    }
  `)

  const { usage, used, featured, practice, related } = data.skills.edges.find(
    (el) => el.node.frontmatter.name === name
  ).node.frontmatter

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={toggle}
      style={modalStyles}
      closeTimeoutMS={200}
      // don't allow scrolling for background
      onAfterOpen={() => (document.body.style.overflow = 'hidden')}
      onAfterClose={() => (document.body.style.overflow = 'unset')}
      className='react-modal-responsive'
    >
      <StyledModalHeader>
        <h3>{name}</h3>
        <div onClick={toggle} onKeyDown={toggle} role='button' tabIndex='-1'>
          <Icon name='Close' />
        </div>
      </StyledModalHeader>

      <StyledModalBody>
        <Usage usage={usage} />

        <h4 className='modal-section-header'>Uses</h4>
        <ul>
          {used &&
            used.map((use, i) => <li key={`${name}-${use}-${i}`}>{use}</li>)}
        </ul>

        {featured && featured.length > 0 && (
          <>
            <h4 className='modal-section-header'>Featured Projects</h4>
            {featured.map((projectName, i) => (
              <SkillModalFeatured
                key={`${name}-${projectName}-${i}`}
                projectName={projectName}
              />
            ))}
          </>
        )}

        {practice && practice.length > 0 && (
          <>
            <h4 className='modal-section-header'>Practice Projects</h4>
            <div>
              {practice.map(({ name, projects }, i) => (
                <div key={`${name}-practice-${i}`}>
                  {name !== 'all' && <h5>{name}</h5>}
                  <ul>
                    {projects &&
                      projects.map((project, i) => {
                        return (
                          <li key={`${name}-${project}-${i}`}>
                            <a
                              href={project}
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              {project}
                            </a>
                          </li>
                        )
                      })}
                  </ul>
                </div>
              ))}
            </div>
          </>
        )}

        {related && related.length > 0 && (
          <>
            <h4 className='modal-section-header'>Related</h4>

            <StyledRelated>
              {related.map((technology, i) => {
                return (
                  <SkillIcon key={`${technology}-${i}`} name={technology} />
                )
              })}
            </StyledRelated>
          </>
        )}
      </StyledModalBody>
    </Modal>
  )
}

SkillModal.propTypes = {
  name: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
}

export default SkillModal
