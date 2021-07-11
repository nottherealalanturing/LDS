import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Icon,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React, { useEffect, useRef, useState } from "react"
import config from "../../data/config"

const imagesPerClick = 21

const InstaGallery = ({ data }) => {
  const col = useBreakpointValue({
    base: "1",
    sm: "1",
    dn: "1",
    md: "2",
    lg: "2",
  })

  const {
    allInstaNode: { edges, _ },
  } = data

  const collection = edges.map(({ node }) => {
    const {
      localFile: { url, childImageSharp },
      caption,
    } = node
    return (
      <a href={"" + url}>
        <GatsbyImage
          image={getImage(childImageSharp.gatsbyImageData)}
          alt={caption}
        />
      </a>
    )
  })

  const [imagesToShow, setImagesToShow] = useState([])
  let arrayForHoldingImages = []
  const ref = useRef(imagesPerClick)
  const loopWithSlice = (start, end) => {
    const slicedImages = collection.slice(start, end)
    arrayForHoldingImages = arrayForHoldingImages.concat(slicedImages)
    setImagesToShow(arrayForHoldingImages)
  }

  useEffect(() => {
    loopWithSlice(0, imagesPerClick)
  }, [])

  const handleShowMoreImages = () => {
    loopWithSlice(0, ref.current + imagesPerClick)
    ref.current += imagesPerClick
  }
  return (
    <>
      <Flex alignItems="center" justifyContent="center" p={1}>
        <Icon as={FaInstagram} color="#c4c4c4" fontSize="100%" />
        <Heading p={1} fontSize="100%">
          Instagram Feed
        </Heading>
      </Flex>
      <Grid
        templateColumns={`repeat(${col}, 1fr)`}
        gap={4}
        mb={12}
        p={1}
        border="1px solid white"
        borderRadius="5px"
      >
        {imagesToShow.map(img => {
          return <Box>{img}</Box>
        })}
      </Grid>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        color="#c4c4c4"
      >
        <Button m={1} variant="outline" onClick={handleShowMoreImages}>
          Load More
        </Button>
        <Link
          href={config.social.instagram}
          outline="1px solid white"
          borderRadius="4px"
          padding="10px"
          textDecoration="none !important"
        >
          Follow us on <Icon as={FaInstagram} mx={1} />
        </Link>
      </Flex>
    </>
  )
}

export default InstaGallery
