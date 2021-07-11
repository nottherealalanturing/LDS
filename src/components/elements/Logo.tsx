import React from "react"
import { Link as GLink } from "gatsby"
import { Heading, Text } from "@chakra-ui/react"

const Logo = () => {
  return (
    <>
      <GLink to={"/"}>
        <Heading as="h1" fontWeight="900">
          LS.
        </Heading>
      </GLink>

      <Text fontWeight="600" color="#c4c4c4" fontSize="sm">
        Kaduna, Nigeria
      </Text>
    </>
  )
}

export default Logo
