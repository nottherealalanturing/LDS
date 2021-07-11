import { Box, Container, Flex, Heading } from "@chakra-ui/react"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import InstaGallery from "../components/insta-gallery"
import { graphql } from "gatsby"

const About = ({ data }) => {
  return (
    <Flex
      my="2rem"
      mx="5vw"
      flexDirection={{
        base: "column",
        sm: "column",
        dn: "column",
        md: "row",
        lg: "row",
      }}
    >
      <Box width="30%">
        <StaticImage
          src="../assets/images/about/about.jpg"
          alt="photo of "
          loading="eager"
          layout="constrained"
          width="400"
          placeholder="blurred"
          formats={["auto", "webp"]}
        />
      </Box>
      <Box width="50%">
        <Container>
          <Heading>About Us</Heading>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime atque
          similique velit qui corporis, iure sunt reiciendis possimus animi,
          minus nesciunt in aliquam nam nobis unde id architecto modi corrupti?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          dignissimos, voluptatem provident reiciendis nisi atque odio labore,
          veritatis dolore ducimus beatae minus eum aperiam? Officia ducimus
          totam earum vel cum. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Perspiciatis, voluptas. Earum minima maxime
          necessitatibus porro, dolorem iusto atque quam nostrum, reiciendis
          dolore iure sed hic id veritatis quod in fugit.Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Maxime atque similique velit qui
          corporis, iure sunt reiciendis possimus animi, minus nesciunt in
          aliquam nam nobis unde id architecto modi corrupti? Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Architecto dignissimos,
          voluptatem provident reiciendis nisi atque odio labore, veritatis
          dolore ducimus beatae minus eum aperiam? Officia ducimus totam earum
          vel cum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Perspiciatis, voluptas. Earum minima maxime necessitatibus porro,
          dolorem iusto atque quam nostrum, reiciendis dolore iure sed hic id
          veritatis quod in fugit.Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Maxime atque similique velit qui corporis, iure sunt
          reiciendis possimus animi, minus nesciunt in aliquam nam nobis unde id
          architecto modi corrupti? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Architecto dignissimos, voluptatem provident
          reiciendis nisi atque odio labore, veritatis dolore ducimus beatae
          minus eum aperiam? Officia ducimus totam earum vel cum. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptas.
          Earum minima maxime necessitatibus porro, dolorem iusto atque quam
          nostrum, reiciendis dolore iure sed hic id veritatis quod in
          fugit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          atque similique velit qui corporis, iure sunt reiciendis possimus
          animi, minus nesciunt in aliquam nam nobis unde id architecto modi
          corrupti? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Architecto dignissimos, voluptatem provident reiciendis nisi atque
          odio labore, veritatis dolore ducimus beatae minus eum aperiam?
          Officia ducimus totam earum vel cum. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Perspiciatis, voluptas. Earum minima
          maxime necessitatibus porro, dolorem iusto atque quam nostrum,
          reiciendis dolore iure sed hic id veritatis quod in fugit.
        </Container>
      </Box>
      <Box width="20%">
        {" "}
        <InstaGallery data={data} />
      </Box>
    </Flex>
  )
}

export const pageQuery = graphql`
  query InstaGallery {
    allInstaNode(sort: { order: DESC, fields: timestamp }) {
      edges {
        node {
          localFile {
            url
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: WEBP)
            }
          }
          caption
        }
      }
      totalCount
    }
  }
`

export default About
