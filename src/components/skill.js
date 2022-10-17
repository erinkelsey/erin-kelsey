import React, { useState, useRef } from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import { CSSTransition } from 'react-transition-group'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Icon } from '@components/icons'
import { useOnClickOutside } from '@hooks'

const StyledSkill = styled.div`
  // Prevent container from jumping
  // @media (min-width: 700px) {
  //   min-height: 100px;
  // }
`

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
    display: ${(props) => (props.modalOpen ? 'flex' : 'none')};
    position: fixed;
    top: 30%;
    left: 10%;
    width: 80%;
    height: 50%;
    outline: 0;
    background-color: var(--purple);
    box-shadow: -10px 0px 30px -15px var(--purple-shadow);
    border-radius: var(--border-radius);
    z-index: 999;
    // transform: translateY(${(props) => (props.modalOpen ? 50 : 0)}vh);
    visibility: ${(props) => (props.modalOpen ? 'visible' : 'hidden')};
    // transition: var(--transition);
  }

  .modal-appear {
    opacity: 0;
    transform: translateY(-10vh);
  }
  .modal-active-appear {
    opacity: 1;
    transform: translateY(0vh);
    transition: opacity 300ms, transform 300ms;
  }
  .modal-done-appear {
    opacity: 1;
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

  const wrapperRef = useRef()
  useOnClickOutside(wrapperRef, () => setModalOpen(false))
  const buttonRef = useRef(null)
  const detailsRef = useRef(null)

  return (
    <StyledSkill>
      <Helmet>
        <body className={modalOpen ? 'blur' : ''} />
      </Helmet>

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

        <CSSTransition
          timeout={250}
          classNames='modal'
          in={modalOpen}
          unmountOnExit
        >
          <StyledModal
            modalOpen={modalOpen}
            aria-hidden={!modalOpen}
            tabIndex={modalOpen ? 1 : -1}
          >
            <div ref={detailsRef}>
              <h3>{name}</h3>
            </div>
          </StyledModal>
        </CSSTransition>
      </div>
    </StyledSkill>
  )
}

Skill.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Skill
