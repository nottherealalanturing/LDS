import { Box } from "@chakra-ui/layout"
import React from "react"
import * as styles from "./styles/collage.module.css"

const Collage = () => {
  return (
    <Box className={styles.drybnCollage}>
      <Box className={styles.drybnCollage__overlay}>
        <Box className={styles.drybnCollage__content}>
          <Box className={styles.drybnCollageItem}></Box>
          <Box className={styles.drybnCollageItem}></Box>
          <Box className={styles.drybnCollageItem}></Box>
          <Box
            className={[
              styles.drybnCollageItem,
              styles.drybnCollageItemHeading,
            ].join(" ")}
          >
            <h2>
              Lorem
              <br />
              <span>Ipsum</span>
            </h2>
          </Box>
          <Box className={styles.drybnCollageItem}></Box>
          <Box className={styles.drybnCollageItem}></Box>
          <Box className={styles.drybnCollageItem}></Box>
          <Box className={styles.drybnCollageItem}></Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Collage
