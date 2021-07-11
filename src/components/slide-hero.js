import { Flex, Text, useBreakpoint } from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { foundingDate, title } from "../../data/config"

const SlideHero = () => {
  const data = useStaticQuery(graphql`
    query slidehero {
      allCloudinaryMedia(
        filter: { public_id: { regex: "assets/hero/" } }
        limit: 10
      ) {
        edges {
          node {
            secure_url
            id
          }
        }
      }
    }
  `)
  const breakpointValue = useBreakpoint()
  return (
    <Flex flexDirection="column" w="100vw">
      <Flex flexDir="column" alignItems="center" justifyContent="center">
        {data.allCloudinaryMedia.edges.map(slide => {
          return (
            <Flex
              alignItems="center"
              justifyContent="center"
              boxShadow="md"
              p="6"
              rounded="md"
              mt={12}
              w="90%"
              bg={breakpointValue === "dn" ? "transparent" : "white"}
            >
              <img
                src={slide.node.secure_url}
                alt={slide.node.id}
                height={"400px"}
                width={"300px"}
                loading="eager"
              />
            </Flex>
          )
        })}
      </Flex>
      <Text textAlign="center" m={1} fontWeight={800}>
        {title}©{foundingDate}
      </Text>
    </Flex>
  )
}

export default SlideHero
