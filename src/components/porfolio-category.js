import { Divider, Flex, Heading, VStack } from "@chakra-ui/react"
import React from "react"
import { PortNavLandscape, PortNavPortrait } from "./PortNav"
import * as styles from "./styles/portfolio-category.module.css"

export const PorfolioLandscape = ({ content, path }) => {
  return (
    <Flex mt="10vh" w="max-content" ml={"10vw"} mr={"1vw"}>
      {content.allCloudinaryMedia.edges.map((card, index) => {
        const nomos = card.node.public_id.split("/")
        const elnomos = nomos[nomos.length - 1]
        return (
          <Flex as="article" className={styles.container} key={index}>
            <Flex className={styles.imageContainer}>
              <Flex
                boxShadow="base"
                p="6"
                rounded="md"
                bg="white"
                as="article"
                width="max-content"
              >
                <img
                  src={card.node.secure_url}
                  alt={elnomos}
                  className={styles.image}
                  loading="eager"
                />
              </Flex>
            </Flex>
          </Flex>
        )
      })}
      <PortNavLandscape path={path} />
    </Flex>
  )
}

export const PortfolioPortrait = ({ content, path, category }) => {
  return (
    <Flex w="100vw" flexDirection="column" mt={"4vh"}>
      <Heading textAlign="center" textTransform="uppercase" my={4}>
        {category}
      </Heading>
      <VStack spacing={4} p={1} w="100%" justifyContent="center">
        {content.allCloudinaryMedia.edges.map((card, index) => {
          const nomos = card.node.public_id.split("/")
          const elnomos = nomos[nomos.length - 1]
          return (
            <Flex flexDir="column">
              <img
                src={card.node.secure_url}
                alt={elnomos}
                className={styles.image}
                key={index}
                loading="eager"
              />

              <Divider my={2} />
            </Flex>
          )
        })}
        <PortNavPortrait path={path} />
      </VStack>
    </Flex>
  )
}
