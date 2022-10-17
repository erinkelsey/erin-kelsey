import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Icon } from '@components/icons'
import { graphql, useStaticQuery } from 'gatsby'

const Skill = ({ name }) => {
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

  // const skillData = data.skill.edges

  console.log(data.skill.edges[0])

  return (
    <a href='/'>
      <Icon name={name} />
    </a>
  )
}

Skill.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Skill
