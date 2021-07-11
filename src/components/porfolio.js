/* import { GatsbyImage } from "gatsby-plugin-image" */
import { Box, Center, Heading, Link } from "@chakra-ui/layout"
import { navigate } from "gatsby"
import React from "react"
import * as styles from "./styles/portfolio-item.module.css"

const CategoryPreview = ({ imageSrc, name, url }) => {
  return (
    <Box as="article" className={styles.container} w="max-content">
      <Box className={styles.imageContainer}>
        <Link className={styles.link}>
          <img
            src={imageSrc}
            alt={name}
            className={styles.image}
            loading="eager"
          />
          <Box className={styles.hoverBox} onClick={() => navigate(url)}>
            <Box className={styles.hoverBoxContent}>
              <Heading as="h2" className={styles.hoverBoxText}>
                {name}
              </Heading>
            </Box>
          </Box>
        </Link>
      </Box>
      <Box as="section" className={styles.categoryContainer}>
        <Center>
          <Heading as="h2" className={styles.categoryTextContainer}>
            <Link className={styles.categoryTextContainerLink}>{name}</Link>
          </Heading>
        </Center>
      </Box>
    </Box>
  )
}

export default CategoryPreview
