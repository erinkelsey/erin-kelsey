import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Modal from 'react-modal'

import { Icon } from '@components/icons'
import { Usage } from '@components'

const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.58)',
  },
  content: {
    position: 'relative',
    top: 'auto',
    left: 'auto',
    right: 'auto',
    bottom: 'auto',
    maxWidth: '60%',
    margin: '10% auto',
    padding: '40px',
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
`

const SkillModal = ({ name, isOpen, toggle }) => {
  const data = useStaticQuery(graphql`
    query ($name: String) {
      skill: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "content/skills/" }
          frontmatter: { name: { eq: $name } }
        }
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
              technologies
            }
          }
        }
      }
    }
  `)

  const skillData = data.skill.edges[0].node.frontmatter
  const { usage, used, featured, practice, technologies } = skillData

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={toggle}
      style={modalStyles}
      closeTimeoutMS={200}
    >
      <StyledModalHeader>
        <h3>{name}</h3>
        <div onClick={toggle} onKeyDown={toggle} role='button' tabIndex='-1'>
          <Icon name='Close' />
        </div>
      </StyledModalHeader>

      <StyledModalBody>
        <Usage usage={usage} />

        <h4 className='modal-section-header'>Used For</h4>
        <ul>
          {used &&
            used.map((use, i) => {
              return <li key={`${name}-${use}-${i}`}>{use}</li>
            })}
        </ul>

        <h4 className='modal-section-header'>Featured Projects</h4>
        <h4 className='modal-section-header'>Practice Projects</h4>
        <div>
          {practice &&
            practice.map(({ name, projects }, i) => (
              <div key={`${name}-practice-${i}`}>
                <h5>{name}</h5>
                <ul>
                  {projects &&
                    projects.map((project, i) => {
                      return <li key={`${name}-${project}-${i}`}>{project}</li>
                    })}
                </ul>
              </div>
            ))}
        </div>

        <h4 className='modal-section-header'>Technologies</h4>
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
