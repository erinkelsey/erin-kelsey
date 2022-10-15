import React, { useState, useEffect } from "react"
// import { Link } from "gatsby"

import styled, { ThemeProvider } from "styled-components"

import { GlobalStyle, theme } from "@styles"

import logo from "../images/logo.png"

// import { heading } from "./layout.module.css"
// import { pageWrapper, navBar, navBarLogo } from "../styles/layout.module.sass"

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Layout = ({ pageTitle, children, location }) => {
  const isHome = location.pathname === "/"
  const [isLoading, setIsLoading] = useState(isHome)

  // Sets target="_blank" rel="noopener noreferrer" on external links
  const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectorAll("a"))
    if (allLinks.length > 0) {
      allLinks.forEach((link) => {
        if (link.host !== window.location.host) {
          link.setAttribute("rel", "noopener noreferrer")
          link.setAttribute("target", "_blank")
        }
      })
    }
  }

  useEffect(() => {
    if (isLoading) {
      return
    }

    if (location.hash) {
      const id = location.hash.substring(1) // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView()
          el.focus()
        }
      }, 0)
    }

    handleExternalLinks()
  }, [isLoading])

  return (
    <div id="root">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <nav>
          <img src={logo} alt="Logo" />
          {/* <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
        </ul> */}
        </nav>
        <main>
          <h1>{pageTitle}</h1>
          {children}
        </main>
      </ThemeProvider>
    </div>
  )
}

export default Layout
