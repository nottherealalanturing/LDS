import {
  Box,
  Grid,
  Flex,
  Text,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react"
import React from "react"
import * as polaroidStyles from "../../components/styles/polaroid.module.css"
import { foundingDate, title } from "../../../data/config"
import { graphql, useStaticQuery } from "gatsby"

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query {
      allCloudinaryMedia(filter: { public_id: { regex: "assets/weddings/" } }) {
        edges {
          node {
            secure_url
            public_id
          }
        }
      }
    }
  `)
  const col = useBreakpointValue({
    base: "1",
    sm: "2",
    dn: "3",
    md: "4",
    lg: "5",
  })
  return (
    <Flex
      flexDirection="column"
      mt={12}
      justifyContent="center"
      w="100%"
      alignItems="center"
    >
      <Heading as="h1" mt={2} textAlign="center">
        GALLERY
      </Heading>

      <Grid
        templateColumns={`repeat(${col}, 1fr)`}
        gap={1}
        mb={4}
        p={4}
        boxSizing="border-box"
        ml={4}
      >
        {data.allCloudinaryMedia.edges.map((image, index) => {
          const nomos = image.node.public_id.split("/")
          const elnomos = nomos[nomos.length - 1]
          return (
            <Box className={polaroidStyles.container}>
              <img
                src={image.node.secure_url}
                alt={elnomos}
                key={index}
                loading="eager"
              />
            </Box>
          )
        })}
        {data.allCloudinaryMedia.edges.map((image, index) => {
          const nomos = image.node.public_id.split("/")
          const elnomos = nomos[nomos.length - 1]
          return (
            <Box className={polaroidStyles.container}>
              <img
                src={image.node.secure_url}
                alt={elnomos}
                key={index}
                loading="eager"
              />
            </Box>
          )
        })}
      </Grid>
      <Text textAlign="center" mx={1} fontWeight={800} fontSize="0.9vw">
        {title} © {foundingDate}
      </Text>
    </Flex>
  )
}

export default Gallery
