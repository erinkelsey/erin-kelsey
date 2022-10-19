import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

import { Icon } from '@components/icons'

const StyledFeatured = styled.div`
  .modal-project-featured {
    display: flex;
    flex-direction: row;
    margin-bottom: 15px;

    .gatsby-image-wrapper {
      width: 100px;
    }

    img {
      border-radius: var(--border-radius) 0 0 var(--border-radius);
      width: 100px;
    }

    .modal-project-featured-details {
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 1px solid var(--slate);
      border-radius: 0 var(--border-radius) var(--border-radius) 0;
      padding: 20px;
      width: 200px;

      h5 {
        font-size: var(--fz-lg);
        font-family: var(--font-heading);
      }

      .modal-project-featured-icons {
        a {
          padding-right: 15px;

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
      <div className='modal-project-featured'>
        <GatsbyImage image={image} alt={projectName} className='img' />
        <div className='modal-project-featured-details'>
          <h5>{projectName}</h5>
          <div className='modal-project-featured-icons'>
            {ios && (
              <a href={ios} target='_blank' rel='noreferrer'>
                <Icon name='AppStore' />
              </a>
            )}
            {android && (
              <a href={android} target='_blank' rel='noreferrer'>
                <Icon name='PlayStore' />
              </a>
            )}
            {external && (
              <a href={external} target='_blank' rel='noreferrer'>
                <Icon name='Link' />
              </a>
            )}
          </div>
        </div>
      </div>
    </StyledFeatured>
  )
}

SkillModalFeatured.propTypes = {
  projectName: PropTypes.string.isRequired,
}

export default SkillModalFeatured
