import Icon from "@chakra-ui/icon"
import { Center, Link, Box, Heading } from "@chakra-ui/layout"
import { Link as GLink } from "gatsby"
import React from "react"
import { GrFormPreviousLink } from "@react-icons/all-files/Gr/GrFormPreviousLink"
import { GrFormNextLink } from "@react-icons/all-files/Gr/GrFormNextLink"
import { RiArrowGoBackLine } from "@react-icons/all-files/Ri/RiArrowGoBackLine"
import { FaBehance } from "@react-icons/all-files/fa/FaBehance"

const PortfolioNav = () => {
  return (
    <Box as="nav">
      <Box as="header">
        <Center>
          <Heading as="h3">Check out these other projects</Heading>
        </Center>
      </Box>
      <Box>
        <Box>
          <Link as={GLink} to={"/portfolio/architecture"}>
            Architecture
            <Box as="span">view</Box>
          </Link>
          <Link as={GLink} to={"/portfolio/arts"}>
            Arts
            <Box as="span">view</Box>
          </Link>
          <Link as={GLink} to={"/portfolio/beauty"}>
            Beauty
            <Box as="span">view</Box>
          </Link>
          <Link as={GLink} to={"/portfolio/experimental"}>
            Experimental
            <Box as="span">view</Box>
          </Link>
          <Link as={GLink} to={"/portfolio/fashion"}>
            Fashion
            <Box as="span">view</Box>
          </Link>
          <Link as={GLink} to={"/portfolio/portraits"}>
            Portraits
            <Box as="span">view</Box>
          </Link>
          <Link as={GLink} to={"/portfolio/commercials"}>
            Commercials
            <Box as="span">view</Box>
          </Link>
        </Box>
        <Link as={GLink} to="">
          <Icon as={FaBehance} color="#c4c4c4" />
          Previous
        </Link>
        {/* 
        <Link as={GLink} to="">
          <Icon as={<GrFormPreviousLink />} />
        </Link>
        <Link as={GLink} to="">
          <Icon as={<GrFormNextLink />} />
        </Link>
        <Link as={GLink} to="">
          <Icon as={<RiArrowGoBackLine />} />
        </Link> */}
      </Box>
    </Box>
  )
}

export default PortfolioNav
