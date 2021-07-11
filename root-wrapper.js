import React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import theme from "./theme"
import Layout from "./src/components/layout"
import "@fontsource/raleway/400.css"
import "@fontsource/raleway/300.css"
import "@fontsource/raleway/700.css"
import "@fontsource/raleway/800.css"
import "@fontsource/raleway/900.css"

export const wrapPageElement = ({ element }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Layout location={element.props.location}>{element}</Layout>
    </ChakraProvider>
  )
}
