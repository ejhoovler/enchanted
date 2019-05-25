import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

const Background = ({ className }) => (
  <StaticQuery query={graphql`
    query {
      desktop: file(relativePath: { eq: "bg.jpg"}) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 4160) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `}
  render={data => {
    const imageData = data.desktop.childImageSharp.fluid
    return (
      <BackgroundImage Tag="section"
                       className={className}
                       fluid={imageData}
                       backgroundColor={`#040e18`}
      >
      </BackgroundImage>
    )
  }
  }
/>
)

const StyledBgImg = styled(Background)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default StyledBgImg
