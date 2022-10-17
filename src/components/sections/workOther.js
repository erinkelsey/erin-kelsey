import React from 'react'

const WorkOther = () => {
  const otherWorkDataGQL = useStaticQuery(graphql`
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
}
