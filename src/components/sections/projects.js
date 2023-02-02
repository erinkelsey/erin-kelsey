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
`

const StyledProject = styled.li`
  position: relative;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column-reverse;
    padding-top: 50px;
  }

  &:not(:last-of-type) {
    margin-bottom: 100px;

    @media (max-width: 900px) {
      margin-bottom: 70px;
    }

    @media (max-width: 480px) {
      margin-bottom: 30px;
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
  }

  .project-content {
    position: relative;
    grid-column: 1 / 7;
    grid-row: 1 / -1;

    @media (max-width: 900px) {
      padding: 30px 0;
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

    @media (max-width: 900px) {
      padding: 0 0 20px 0;
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

    @media (max-width: 900px) {
      &:hover,
      &:focus {
        z-index: 0;
        transform: none;
      }
    }
  }

  .project-technologies {
    padding-top: 20px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px;
    grid-column-start: -1;
    z-index: 10;

    @media (max-width: 1080px) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 900px) {
      grid-template-columns: repeat(6, 1fr);
      padding-top: 0px;
    }

    @media (max-width: 768px) {
      grid-template-columns: repeat(5, 1fr);
    }

    @media (max-width: 400px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  &:nth-of-type(odd) {
    .project-content {
      grid-column: 7 / -1;
      text-align: right;

      @media (max-width: 900px) {
        text-align: left;
      }
    }

    .project-image-left-memcards {
      grid-column: 1 / 3;
      width: 100px;
      align-self: end;
      z-index: 1;
      padding-bottom: 30px;

      @media (max-width: 1200px) {
        width: 90px;
        padding-bottom: 60px;
      }

      @media (max-width: 1080px) {
        width: none;
        padding-bottom: 20px;
      }

      @media (max-width: 900px) {
        display: none;
      }
    }

    .project-image-back-memcards {
      grid-column: 2 / 5;

      @media (max-width: 1080px) {
        grid-column: 2 / 6;
      }

      @media (max-width: 900px) {
        display: none;
      }
    }

    .project-image-right-memcards {
      grid-column: 4 / 7;
      width: 100px;
      align-self: end;
      margin-left: 50px;
      padding-bottom: 30px;

      @media (max-width: 1200px) {
        width: 90px;
        padding-bottom: 60px;
      }

      @media (max-width: 1080px) {
        width: none;
        padding-bottom: 20px;
        margin-left: 100px;
        margin-right: 20px;
      }

      @media (max-width: 900px) {
        display: none;
      }
    }

    .project-image-back-streamtech {
      grid-column: 1 / 7;
      padding-right: 80px;

      @media (max-width: 1200px) {
        padding-right: 30px;
      }

      @media (max-width: 900px) {
        width: 70%;
        padding: 0;
      }

      @media (max-width: 600px) {
        width: 100%;
      }
    }

    .project-image-right-streamtech {
      grid-column: 5 / 7;
      width: 125px;
      align-self: end;
      padding-bottom: 40px;

      @media (max-width: 1200px) {
        width: 100px;
        padding-bottom: 70px;
      }

      @media (max-width: 1080px) {
        width: 80px;
        padding-bottom: 90px;
      }

      @media (max-width: 900px) {
        display: none;
      }
    }

    .project-technologies {
      @media (min-width: 900px) {
        direction: rtl;
      }
    }
  }

  .project-image-back-emjinx {
    grid-column: 7 / -1;
    padding-left: 80px;
    padding-bottom: 50px;

    @media (max-width: 1200px) {
      padding-left: 30px;
    }

    @media (max-width: 900px) {
      width: 80%;
      padding: 0;
    }

    @media (max-width: 600px) {
      width: 100%;
    }
  }

  .project-image-right-emjinx {
    grid-column: 12 / 13;
    width: 125px;
    align-self: end;
    padding-bottom: 90px;
    padding-right: 20px;

    @media (max-width: 1200px) {
      padding-bottom: 110px;
    }

    @media (max-width: 1080px) {
      padding-bottom: 150px;
      width: 100px;
    }

    @media (max-width: 900px) {
      display: none;
    }
  }

  .project-images-memcards-desktop {
    @media (max-width: 900px) {
      display: none;
    }
  }

  .project-images-memcards-mobile {
    display: none;

    @media (max-width: 900px) {
      display: grid;
      grid-template-columns: repeat(10, 1fr);
      align-items: end;

      .project-image-left-memcards {
        display: block;
        grid-column: 2 / 4;
        width: 140px;
        padding-bottom: 0px;

        @media (max-width: 768px) {
          width: 100px;
        }

        @media (max-width: 500px) {
          width: 75px;
        }
      }

      .project-image-back-memcards {
        display: block;
        grid-column: 3 / 8;
        margin-bottom: 20px;

        @media (max-width: 768px) {
          width: 250px;
        }

        @media (max-width: 500px) {
          width: 200px;
        }
      }

      .project-image-right-memcards {
        display: block;
        grid-column: 7 / 10;
        width: 140px;
        margin-left: 0;
        padding-bottom: 0px;

        @media (max-width: 768px) {
          width: 100px;
        }

        @media (max-width: 500px) {
          width: 75px;
        }
      }
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
            const { name, technologies, back, left, right } = frontmatter
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
                    <p className='project-overline'>Featured Project</p>

                    <h3 className='project-title'>{name}</h3>

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

                {name === 'MemCards' && (
                  <div className='project-images-memcards-mobile'>
                    <div className='project-image project-image-left-memcards'>
                      <GatsbyImage
                        image={leftImage}
                        alt={name}
                        className='img'
                      />
                    </div>
                    <div className='project-image project-image-back-memcards'>
                      <GatsbyImage
                        image={backImage}
                        alt={name}
                        className='img'
                      />
                    </div>
                    <div className='project-image project-image-right-memcards'>
                      <GatsbyImage
                        image={rightImage}
                        alt={name}
                        className='img'
                      />
                    </div>
                  </div>
                )}

                {leftImage && (
                  <div
                    className={
                      name === 'MemCards'
                        ? 'project-image project-image-left-memcards project-images-memcards-desktop'
                        : ''
                    }
                  >
                    <GatsbyImage image={leftImage} alt={name} className='img' />
                  </div>
                )}

                <div
                  className={
                    name === 'MemCards'
                      ? 'project-image project-image-back-memcards project-images-memcards-desktop'
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
                        ? 'project-image project-image-right-memcards project-images-memcards-desktop'
                        : name === 'StreamTECH'
                        ? 'project-image project-image-right-streamtech'
                        : 'project-image project-image-right-emjinx'
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
