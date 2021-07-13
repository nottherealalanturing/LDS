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
      justifyContent={{
        base: "normal",
        sm: "normal",
        dn: "normal",
        md: "center",
        lg: "center",
      }}
      alignItems={{
        base: "center",
        sm: "center",
        dn: "center",
        md: "normal",
        lg: "normal",
      }}
      width="100vw"
    >
      <Box
        width={{
          base: "50%",
          sm: "50%",
          dn: "50%",
          md: "30%",
          lg: "30%",
        }}
      >
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
      <Box
        width={{
          base: "70%",
          sm: "70%",
          dn: "70%",
          md: "50%",
          lg: "50%",
        }}
      >
        <Container my={4} px={8}>
          <Heading textAlign="center">About Us</Heading>
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
      <Box
        width={{
          base: "100%",
          sm: "100%",
          dn: "20%",
          md: "20%",
          lg: "20%",
        }}
      >
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
