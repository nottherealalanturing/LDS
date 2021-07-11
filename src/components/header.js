import { Box } from "@chakra-ui/react"
import * as React from "react"
import Navbar from "./navbar"

const Header = () => {
  return (
    <header>
      <Box bg="black">
        <Navbar />
      </Box>
    </header>
  )
}

export default Header
