import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const StyledWorkOtherItem = styled.div`
  h5 {
    color: var(--pink);
    font-size: var(--fz-lg);
    margin: 0 0 5px;
  }
`

const WorkOther = () => {
  const data = useStaticQuery(graphql`
    query {
      work: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/other/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              company
              location
              range
            }
          }
        }
      }
    }
  `)

  const workData = data.work.edges

  return (
    workData &&
    workData.map(({ node }, i) => {
      const { title, company, range, location } = node.frontmatter

      return (
        <StyledWorkOtherItem key={`other-work-${i}`}>
          <h3>{company}</h3>
          <h5>{title}</h5>
          <p className='range'>
            {range} ({location})
          </p>
        </StyledWorkOtherItem>
      )
    })
  )
}

export default WorkOther
