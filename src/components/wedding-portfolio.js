/* import { GatsbyImage } from "gatsby-plugin-image" */
import { Box, Center, Heading, Link } from "@chakra-ui/layout"
import { navigate } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import * as styles from "./styles/portfolio-item.module.css"

const WeddingCategoryPreview = ({ imageSrc, name }) => {
  return (
    <Box as="article" className={styles.container} /* h="1200px" */ w="800px">
      <Box className={styles.imageContainer}>
        <Link className={styles.link}>
          <GatsbyImage
            image={getImage(imageSrc)}
            alt={name}
            className={styles.image}
          />
          <Box
            className={styles.hoverBox}
            onClick={() => navigate(`/weddings/portfolio/${name}`)}
          >
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

export default WeddingCategoryPreview
