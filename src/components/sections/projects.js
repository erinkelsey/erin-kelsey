import React, { useEffect, useRef } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { SkillIcon } from '@components'
import sr from '@utils/sr'
import { srConfig } from '@config'
import { usePrefersReducedMotion } from '@hooks'

const StyledProjectsGrid = styled.ul`
  ${({ theme }) => theme.mixins.resetList};

  a {
    position: relative;
    z-index: 1;
  }
`

const StyledProject = styled.li`
  position: relative;
  display: grid;
  // grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;

  @media (max-width: 768px) {
    ${({ theme }) => theme.mixins.boxShadow};
  }

  &:not(:last-of-type) {
    margin-bottom: 100px;

    @media (max-width: 768px) {
      margin-bottom: 70px;
    }

    @media (max-width: 480px) {
      margin-bottom: 30px;
    }
  }

  &:nth-of-type(odd) {
    .project-content {
      grid-column: 7 / -1;
      text-align: right;

      @media (max-width: 1080px) {
        grid-column: 5 / -1;
      }
      @media (max-width: 768px) {
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
        text-align: left;
      }
      @media (max-width: 480px) {
        padding: 25px 25px 20px;
      }
    }

    .project-technologies-list {
      justify-content: flex-end;

      @media (max-width: 768px) {
        justify-content: flex-start;
      }

      li {
        margin: 0 0 5px 20px;

        @media (max-width: 768px) {
          margin: 0 10px 5px 0;
        }
      }
    }

    .project-image-left-memcards {
      grid-column: 1 / 3;
      width: 125px;
      align-self: end;
      z-index: 1;

      @media (max-width: 1080px) {
        grid-column: 3 / 5;
        width: 75px;
        align-self: center;
        padding-top: 150px;
      }
    }

    .project-image-back-memcards {
      grid-column: 2 / 5;

      @media (max-width: 1080px) {
        grid-column: 1 / 4;
      }
    }

    .project-image-back-emjinx {
      grid-column: 1 / 6;

      @media (max-width: 1080px) {
        grid-column: 2 / 4;
        width: 300px;
      }
    }

    .project-image-right-memcards {
      grid-column: 4 / 6;
      justify-self: end;
      width: 125px;
      align-self: end;
      z-index: 1;

      @media (max-width: 1080px) {
        display: none;
      }
    }

    .project-image-back-streamtech {
      grid-column: 1 / 6;

      @media (max-width: 1080px) {
        grid-column: 2 / 4;
        width: 300px;
      }
    }

    .project-image-right-streamtech {
      grid-column: 5 / 7;
      width: 125px;
      align-self: end;

      @media (max-width: 1080px) {
        grid-column: 1 / 3;
        width: 75px;
        align-self: center;
        padding-top: 150px;
      }
    }

    .project-technologies {
      @media (min-width: 769px) {
        direction: rtl;
      }
    }
  }

  .project-content {
    position: relative;
    grid-column: 1 / 7;
    grid-row: 1 / -1;

    @media (max-width: 1080px) {
      grid-column: 1 / 9;
    }

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      grid-column: 1 / -1;
      padding: 40px 40px 30px;
      z-index: 5;
    }

    @media (max-width: 480px) {
      padding: 30px 25px 20px;
    }
  }

  .project-overline {
    margin: 10px 0;
    color: var(--green);
    font-family: var(--font-label);
    font-size: var(--fz-xs);
    font-weight: 400;
  }

  .project-title {
    color: var(--lightest-slate);
    font-size: clamp(24px, 5vw, 28px);

    @media (min-width: 768px) {
      margin: 0 0 20px;
    }

    @media (max-width: 768px) {
      color: var(--white);

      a {
        position: static;

        &:before {
          content: '';
          display: block;
          position: absolute;
          z-index: 0;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
      }
    }
  }

  .project-description {
    ${({ theme }) => theme.mixins.boxShadow};
    position: relative;
    z-index: 2;
    padding: 25px;
    border-radius: var(--border-radius);
    background-color: var(--light-purple);
    color: var(--light-slate);
    font-size: var(--fz-lg);

    @media (max-width: 768px) {
      padding: 20px 0;
      background-color: transparent;
      box-shadow: none;

      &:hover {
        box-shadow: none;
      }
    }

    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }

    strong {
      color: var(--white);
      font-weight: normal;
    }
  }

  .project-image {
    ${({ theme }) => theme.mixins.dropShadow};
    position: relative;
    z-index: 0;
    grid-row: 1 / -1;

    transition: var(--transition);

    &:hover,
    &:focus {
      z-index: 5;
      transform: scale(1.25);
    }

    .img {
      border-radius: var(--border-radius);
    }

    @media (max-width: 768px) {
      display: none;
    }
  }

  .project-technologies {
    padding-top: 20px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 10px;
    grid-column-start: -1;

    @media (max-width: 1080px) {
      grid-template-columns: repeat(3, 1fr);
      padding-top: 10px;
    }

    @media (max-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
      padding-top: 0px;
    }
  }
`

const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      featured: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/content/featured/" }
          frontmatter: { show: { eq: true } }
        }
        sort: { fields: [frontmatter___date], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              name
              cover {
                childImageSharp {
                  gatsbyImageData(
                    width: 700
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
              back {
                childImageSharp {
                  gatsbyImageData(
                    width: 700
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
              left {
                childImageSharp {
                  gatsbyImageData(
                    width: 700
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
              right {
                childImageSharp {
                  gatsbyImageData(
                    width: 700
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
              android
              ios
              external
              technologies
              software
            }
            html
          }
        }
      }
    }
  `)

  const featuredProjects = data.featured.edges.filter(({ node }) => node)
  const revealTitle = useRef(null)
  const revealProjects = useRef([])
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }

    sr.reveal(revealTitle.current, srConfig())
    revealProjects.current.forEach((ref, i) =>
      sr.reveal(ref, srConfig(i * 100))
    )
  }, [prefersReducedMotion])

  return (
    <section id='projects'>
      <div ref={revealTitle}>
        <h2 className='section-heading'>Projects</h2>
        <hr className='section-heading-underline' />
      </div>

      <StyledProjectsGrid>
        {featuredProjects &&
          featuredProjects.map(({ node }, i) => {
            const { frontmatter, html } = node
            const {
              name,
              external,
              technologies,
              software,
              back,
              left,
              right,
            } = frontmatter
            const backImage = getImage(back)
            const leftImage = getImage(left)
            const rightImage = getImage(right)

            return (
              <StyledProject
                key={i}
                ref={(el) => (revealProjects.current[i] = el)}
              >
                <div className='project-content'>
                  <div>
                    <p className='project-overline'>
                      {software ? 'Featured Project' : 'Non-Software Project'}
                    </p>

                    <h3 className='project-title'>
                      <a href={external}>{name}</a>
                    </h3>

                    <div
                      className='project-description'
                      dangerouslySetInnerHTML={{ __html: html }}
                    />

                    {technologies && technologies.length && (
                      <div className='project-technologies'>
                        {technologies.map((technology) => (
                          <SkillIcon
                            key={`${i}-${technology}`}
                            name={technology}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {leftImage && (
                  <div
                    className={
                      name === 'MemCards'
                        ? 'project-image project-image-left-memcards'
                        : 'project-image'
                    }
                  >
                    <GatsbyImage image={leftImage} alt={name} className='img' />
                  </div>
                )}

                <div
                  className={
                    name === 'MemCards'
                      ? 'project-image project-image-back-memcards'
                      : name === 'StreamTECH'
                      ? 'project-image project-image-back-streamtech'
                      : 'project-image project-image-back-emjinx'
                  }
                >
                  <GatsbyImage image={backImage} alt={name} className='img' />
                </div>

                {rightImage && (
                  <div
                    className={
                      name === 'MemCards'
                        ? 'project-image project-image-right-memcards'
                        : name === 'StreamTECH'
                        ? 'project-image project-image-right-streamtech'
                        : 'project-image'
                    }
                  >
                    <GatsbyImage
                      image={rightImage}
                      alt={name}
                      className='img'
                    />
                  </div>
                )}
              </StyledProject>
            )
          })}
      </StyledProjectsGrid>
    </section>
  )
}

export default Projects
