import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledUsage = styled.div`
  background-color: ${(props) =>
    props.usage === 'HIGH'
      ? 'var(--pink)'
      : props.usage === 'MEDIUM'
      ? 'var(--pink-tint)'
      : 'var(--light-slate)'};
  color: var(--purple);
  font-size: var(--fz-xxxs);
  font-weight: 600;
  padding: 10px 30px;
  border-radius: var(--border-radius);
  width: fit-content;
`

const usages = ['HIGH', 'MEDIUM', 'LOW']

const Usage = ({ usage }) => {
  return (
    <StyledUsage usage={usage}>
      <span>{usage} USAGE</span>
    </StyledUsage>
  )
}

export default Usage

Usage.propTypes = {
  usage: PropTypes.oneOf(usages).isRequired,
}
