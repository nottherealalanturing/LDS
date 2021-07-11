import { Flex, Grid, Heading, Text, useBreakpointValue } from "@chakra-ui/react"
import { graphql } from "gatsby"
import React from "react"
import StoryPreview from "../../components/storyPreview"
import { foundingDate, title } from "../../../data/config"

const Stories = ({ data }) => {
  const col = useBreakpointValue({
    base: "1",
    sm: "2",
    dn: "3",
    md: "4",
    lg: "5",
  })
  return (
    <Flex
      flexDir="column"
      width="100vw"
      justifyContent="center"
      alignItems="center"
      my={12}
    >
      <Heading>WEDDING STORIES</Heading>
      <Grid
        templateColumns={`repeat(${col}, 1fr)`}
        mb={12}
        mx={12}
        my={8}
        gap={8}
      >
        {data.allMarkdownRemark.nodes.map((story, index) => {
          return (
            <StoryPreview
              name={story.frontmatter.name}
              category={story.frontmatter.category}
              thumbnail={story.frontmatter.image}
              date={story.frontmatter.date}
              location={story.frontmatter.location}
              text={story.frontmatter.text}
              key={index}
            />
          )
        })}
      </Grid>
      <Text textAlign="center" mx={1} fontWeight={800} fontSize="0.9vw">
        {title} © {foundingDate}.
      </Text>
    </Flex>
  )
}

export default Stories

export const PageQuery = graphql`
  query {
    allMarkdownRemark {
      nodes {
        frontmatter {
          image
          name
          category
          date
          location
          text
        }
      }
    }
  }
`
