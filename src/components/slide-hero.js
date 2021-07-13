import { Flex, Text, useBreakpoint } from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { foundingDate, title } from "../../data/config"

const images = [
  <StaticImage
    src={"../assets/images/hero/pexels-andrea-piacquadio-3768163.jpg"}
    alt={"pexels-andrea-piacquadio-3768163"}
    height={400}
    width={300}
    placeholder="blurred"
    layout="constrained"
    formats={["webp"]}
    loading={"eager"}
  />,
  <StaticImage
    src={"../assets/images/hero/pexels-asa-dugger-1897590.jpg"}
    alt={"pexels-asa-dugger-1897590"}
    height={400}
    width={300}
    placeholder="blurred"
    layout="constrained"
    formats={["webp"]}
    loading={"eager"}
  />,
  <StaticImage
    src={"../assets/images/hero/pexels-jamiesx-co-4242520.jpg"}
    alt={"pexels-jamiesx-co-4242520"}
    height={400}
    width={300}
    placeholder="blurred"
    layout="constrained"
    formats={["webp"]}
    loading={"eager"}
  />,
  <StaticImage
    src={"../assets/images/hero/pexels-michael-dupuis-4015706.jpg"}
    alt={"pexels-michael-dupuis-4015706"}
    height={400}
    width={300}
    placeholder="blurred"
    layout="constrained"
    formats={["webp"]}
    loading={"eager"}
  />,
  <StaticImage
    src={"../assets/images/hero/pexels-olya-prutskova-7121391.jpg"}
    alt={"pexels-olya-prutskova-7121391"}
    height={400}
    width={300}
    placeholder="blurred"
    layout="constrained"
    formats={["webp"]}
    loading={"eager"}
  />,
  <StaticImage
    src={"../assets/images/hero/pexels-tainá-bernard-3482526.jpg"}
    alt={"pexels-tainá-bernard-3482526"}
    height={400}
    width={300}
    placeholder="blurred"
    layout="constrained"
    formats={["webp"]}
    loading={"eager"}
  />,
  <StaticImage
    src={"../assets/images/hero/pexels-tima-miroshnichenko-5560202.jpg"}
    alt={"pexels-tima-miroshnichenko-5560202"}
    height={400}
    width={300}
    placeholder="blurred"
    layout="constrained"
    formats={["webp"]}
    loading={"eager"}
  />,
]
const SlideHero = () => {
  const data = useStaticQuery(graphql`
    query {
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
        {images.map((slide, index) => {
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
              key={index}
            >
              {slide}
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
