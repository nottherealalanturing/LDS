import { Flex, useBreakpoint, Text } from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import GridPortfolio from "../../components/grid-portfolio"
import CategoryPreview from "../../components/porfolio"
import { foundingDate, title } from "../../../data/config"

const Porfolio = () => {
  const breakpoint = useBreakpoint()

  return breakpoint === "sm" ||
    breakpoint === "base" ||
    breakpoint === "md" ||
    breakpoint === "dn" ||
    breakpoint === "lg" ? (
    <Flex w="100vw" justifyContent="center" alignItems="center">
      {" "}
      <GridPortfolio />
    </Flex>
  ) : (
    <ScrollPorfolio />
  )
}

const ScrollPorfolio = () => {
  const data = useStaticQuery(graphql`
    query scrollPortQuery {
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
    <Flex my="10vh" /* w="max-content" */ ml={"10vw"} mr={"1vw"}>
      {data.allCloudinaryMedia.edges.map(preview => {
        const nomos = preview.node.public_id.split("/")
        const elnomos = nomos[nomos.length - 1]
        return (
          <CategoryPreview
            imageSrc={preview.node.secure_url}
            name={elnomos}
            url={`/portfolio/${elnomos}`}
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

export default Porfolio
