import {
  Divider,
  Flex,
  Heading,
  Link,
  Text,
  useBreakpoint,
  VStack,
} from "@chakra-ui/react"
import { graphql, Link as GLink } from "gatsby"
import React from "react"
import { foundingDate, title } from "../../../../data/config"
import CategoryPreview from "../../../components/porfolio"

const Porfolio = ({ data }) => {
  const breakpoint = useBreakpoint()

  return breakpoint === "sm" ||
    breakpoint === "base" ||
    breakpoint === "md" ||
    breakpoint === "dn" ||
    breakpoint === "lg" ? (
    <Flex w="100vw" justifyContent="center" alignItems="center">
      {" "}
      <WeddingPortraitPortfolio data={data} />
    </Flex>
  ) : (
    <WeddingLandScapePorfolio data={data} />
  )
}

const WeddingLandScapePorfolio = ({ data }) => {
  return (
    <Flex my="10vh" /* w="max-content" */ ml={"10vw"} mr={"1vw"}>
      {data.allCloudinaryMedia.edges.map(preview => {
        const nomos = preview.node.public_id.split("/")
        const elnomos = nomos[nomos.length - 1]
        return (
          <CategoryPreview
            imageSrc={preview.node.secure_url}
            name={elnomos}
            url={`/weddings/portfolio/${elnomos}`}
          />
        )
      })}
      <Text
        position="fixed"
        bottom={0}
        right={0}
        m={1}
        fontWeight={800}
        fontSize="0.8vw"
      >
        {title} © {foundingDate}
      </Text>
    </Flex>
  )
}

const WeddingPortraitPortfolio = ({ data }) => {
  return (
    <VStack spacing={4} p={1} mt={"4vh"} w="80vw">
      <Heading textAlign="center">WEDDING PORTFOLIO</Heading>
      {data.allCloudinaryMedia.edges.map((preview, index) => {
        const nomos = preview.node.public_id.split("/")
        const elnomos = nomos[nomos.length - 1]

        return (
          <Link as={GLink} to={`/weddings/portfolio/${elnomos}`}>
            <Flex flexDir="column">
              <img src={preview.node.secure_url} alt={elnomos} key={index} />
              <Heading
                as="h2"
                fontSize="sm"
                textAlign="center"
                mt={1}
                textTransform="uppercase"
              >
                {elnomos}
              </Heading>
              <Divider my={2} />
            </Flex>
          </Link>
        )
      })}
      <Text m={1} fontWeight={800} fontSize="1vw" textAlign="center">
        {title} © {foundingDate}
      </Text>
    </VStack>
  )
}

export const pageQuery = graphql`
  query {
    allCloudinaryMedia(
      filter: { public_id: { regex: "assets/weddindex/" } }
      sort: { fields: id }
    ) {
      edges {
        node {
          secure_url
          public_id
        }
      }
    }
  }
`

export default Porfolio
