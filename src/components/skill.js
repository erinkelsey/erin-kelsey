import React, { useState, useRef } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Icon } from '@components/icons'
import { Usage } from '@components'
import { useOnClickOutside } from '@hooks'

const StyledSkill = styled.div``

const StyledIconButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50px;

  &:hover,
  &:focus {
    transition: var(--transition);
    transform: translateY(-3px);
    color: var(--pink);
    cursor: pointer;
  }

  svg {
    width: 24px;
    height: 24px;
  }

  p {
    font-size: var(--fz-sm);
  }
`

const StyledModal = styled.div`
  @media (min-width: 769px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 10%;
    padding: 50px;
    width: 80%;
    height: 70%;
    outline: 0;
    overflow: auto;
    background-color: var(--purple);
    box-shadow: -10px 0px 30px -15px var(--purple-shadow);
    border-radius: var(--modal-border-radius);
    z-index: 9;
    transform: translateY(${(props) => (props.modalOpen ? 35 : 0)}%);
    visibility: ${(props) => (props.modalOpen ? 'visible' : 'hidden')};
    transition: var(--transition);
  }

  .modal-section-header {
    padding: 20px 0 10px;
  }

  ul {
    ${({ theme }) => theme.mixins.fancyList};

    li {
      margin-bottom: 5px;
    }
  }
`

const StyledModalHeader = styled.div`
  ${({ theme }) => theme.mixins.flexBetween};
  width: 100%;

  h3 {
    font-size: var(--fz-heading-sm);
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

const Skill = ({ name }) => {
  const [modalOpen, setModalOpen] = useState(false)

  const toggleModal = () => setModalOpen(!modalOpen)

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
  console.log(skillData)

  const wrapperRef = useRef()
  useOnClickOutside(wrapperRef, () => setModalOpen(false))

  const buttonRef = useRef(null)
  const modalRef = useRef(null)

  return (
    <StyledSkill>
      <div ref={wrapperRef}>
        <StyledIconButton
          onClick={toggleModal}
          modalOpen={modalOpen}
          ref={buttonRef}
          aria-label='Modal'
        >
          <Icon name={name} />
          <p>{name}</p>
        </StyledIconButton>

        <StyledModal
          modalOpen={modalOpen}
          aria-hidden={!modalOpen}
          tabIndex={modalOpen ? 1 : -1}
          ref={modalRef}
        >
          <StyledModalHeader>
            <h3>{name}</h3>
            <div onClick={toggleModal}>
              <Icon name='Close' />
            </div>
          </StyledModalHeader>

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
          <h4 className='modal-section-header'>Technologies</h4>
        </StyledModal>
      </div>
    </StyledSkill>
  )
}

Skill.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Skill
