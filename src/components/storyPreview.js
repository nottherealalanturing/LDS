import { Badge, Flex, Heading, Link, Text } from "@chakra-ui/react"
import { Link as GLink } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

const StoryPreview = ({
  category,
  thumbnail,
  name,
  date,
  location,
  text,
  slug,
}) => {
  return (
    <>
      <Flex
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        flexDir="column"
      >
        <img src={thumbnail} alt={name} />

        <Flex p="6" flexDir="column">
          <Flex justifyContent="center" alignItems="center" flexDir="column">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              {date}
            </Badge>
            <Text
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
              my={2}
            >
              {location} {/* &bull; {date} */}
            </Text>
          </Flex>

          <Heading
            fontWeight="500"
            as="h1"
            fontSize="3vw"
            textAlign="center"
            textTransform="uppercase"
          >
            {name}
          </Heading>

          <Link
            border="1px solid white"
            p={2}
            borderRadius="md"
            textAlign="center"
            fontWeight="800"
            as={GLink}
            to={`/weddings/stories/${slug}`}
            textDecoration="none !important"
            state={{
              category,
              thumbnail,
              name,
              date,
              location,
              text,
              slug,
            }}
          >
            VIEW
          </Link>
        </Flex>
      </Flex>
    </>
  )
}

export default StoryPreview
