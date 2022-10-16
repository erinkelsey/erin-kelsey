import * as React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Layout, Seo, Hero, About, Work } from '@components'

const StyledMainContainer = styled.main`
  counter-reset: section;
`

const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <StyledMainContainer className='fillHeight'>
        <Hero />
        <About />
        <Work />
      </StyledMainContainer>
    </Layout>
  )
}

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
}

export default IndexPage

export const Head = () => <Seo />
