import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Icon } from '@components/icons'
import { SkillModal } from '@components'

const StyledIconButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  width: 80px;

  @media (max-width: 900px) {
    width: 60px;
  }

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

    @media max(width: 900px) {
      width: 18px;
      height: 18px;
    }
  }

  p {
    font-size: var(--fz-sm);
    text-align: center;

    @media max(width: 900px) {
      font-size: var(--fz-xxxs);
    }
  }
`

const SkillIcon = ({ name }) => {
  const [showModal, setShowModal] = useState(false)

  const toggleModal = () => setShowModal(!showModal)

  return (
    <>
      <StyledIconButton onClick={toggleModal}>
        <Icon name={name} />
        <p>{name}</p>
      </StyledIconButton>

      <SkillModal
        key={`${name}`}
        isOpen={showModal}
        name={name}
        toggle={toggleModal}
      />
    </>
  )
}

SkillIcon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default SkillIcon
