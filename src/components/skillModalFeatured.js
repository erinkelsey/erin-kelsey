import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

import { Icon } from '@components/icons'

const StyledFeatured = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;

  .gatsby-image-wrapper {
    width: 30px;
    border-radius: 5px;
  }

  img {
    width: 30px;
  }

  h5 {
    font-size: var(--fz-xl);
    font-family: var(--font-heading);
    margin: 0;
  }

  .links {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    a {
      &:hover,
      &:focus {
        transform: translateY(-3px);
      }

      svg {
        height: 24px;
        width: 24px;
      }
    }
  }
`

const SkillModalFeatured = ({ projectName }) => {
  const data = useStaticQuery(graphql`
    query {
      featured: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "content/featured/" } }
      ) {
        edges {
          node {
            frontmatter {
              name
              logo {
                childImageSharp {
                  gatsbyImageData
                }
              }
              external
              ios
              android
            }
          }
        }
      }
    }
  `)

  const { logo, external, ios, android } = data.featured.edges.find(
    (el) => el.node.frontmatter.name === projectName
  ).node.frontmatter
  const image = getImage(logo)

  return (
    <StyledFeatured>
      <GatsbyImage
        image={image}
        alt={projectName}
        className='img'
        objectFit='contain'
      />
      <h5>{projectName}</h5>
      <div className='links'>
        {ios && (
          <a href={ios} target='_blank' rel='noreferrer'>
            <Icon name='App Store Connect' />
          </a>
        )}
        {android && (
          <a href={android} target='_blank' rel='noreferrer'>
            <Icon name='Google Play Console' />
          </a>
        )}
        {external && (
          <a href={external} target='_blank' rel='noreferrer'>
            <Icon name='Link' />
          </a>
        )}
      </div>
    </StyledFeatured>
  )
}

SkillModalFeatured.propTypes = {
  projectName: PropTypes.string.isRequired,
}

export default SkillModalFeatured
