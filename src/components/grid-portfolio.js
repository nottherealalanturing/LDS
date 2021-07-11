import { Flex, Heading } from "@chakra-ui/layout"
import { Divider, Link, Text, VStack } from "@chakra-ui/react"
import { graphql, Link as GLink, useStaticQuery } from "gatsby"
import React from "react"
import { foundingDate, title } from "../../data/config"

const GridPortfolio = () => {
  const data = useStaticQuery(graphql`
    query {
      allCloudinaryMedia(
        filter: { public_id: { regex: "assets/portindex/" } }
        sort: { fields: public_id }
      ) {
        edges {
          node {
            secure_url
            public_id
          }
        }
      }
    }
  `)

  return (
    <VStack spacing={4} p={1} mt={"4vh"} w="80vw">
      <Heading textAlign="center">PORTFOLIO</Heading>
      {data.allCloudinaryMedia.edges.map((preview, index) => {
        const nomos = preview.node.public_id.split("/")
        const elnomos = nomos[nomos.length - 1]
        return (
          <Link as={GLink} to={`/portfolio/${elnomos}`} key={index}>
            <Flex flexDir="column">
              <img
                src={preview.node.secure_url}
                alt={elnomos}
                /* height={"400px"}
                width={"300px"} */
                loading="eager"
              />
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
      <Text textAlign="center" m={1} fontWeight={800} fontSize="1vw">
        {title}©{foundingDate}
      </Text>
    </VStack>
  )
}

export default GridPortfolio
