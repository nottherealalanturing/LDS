import { Box } from "@chakra-ui/layout"
import { useBreakpoint } from "@chakra-ui/react"
import * as React from "react"
import Hero from "../components/hero"
import SlideHero from "../components/slide-hero"

const IndexPage = () => {
  const breakpoint = useBreakpoint()
  return (
    <Box w="100vw" h="80vh">
      {breakpoint === "sm" || breakpoint === "base" || breakpoint === "dn" ? (
        <SlideHero />
      ) : (
        <Hero />
      )}
    </Box>
  )
}

export default IndexPage
