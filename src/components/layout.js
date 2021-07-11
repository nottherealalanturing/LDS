import { Flex } from "@chakra-ui/layout"
import { useBreakpoint } from "@chakra-ui/react"
import * as React from "react"
import Header from "./header"
import SideBar from "./sidebar"
import WeddingNav from "./wedding-navbar"

const Layout = ({ children, location = "" }) => {
  const path = (location.pathname + "").startsWith("/weddings")
  const cntpath = (location.pathname + "").startsWith("/contact")
  const brpt = useBreakpoint()
  const weddingSidebar =
    (brpt === "lg" || brpt === "xl" || brpt === "2xl") && (path || cntpath)
      ? "none"
      : "flex"
  return (
    <>
      <Flex w="100vw" bg="black">
        {path ? <WeddingNav /> : <Header />}
      </Flex>
      <Flex>
        <Flex pt="10vh" /* margin-top="10vh" */>
          <Flex
            display={{
              base: "none",
              sm: "none",

              md: "none",
              lg: weddingSidebar,
            }}
          >
            {path ? null : <SideBar />}
          </Flex>
          <Flex w="98vw" as="main">
            {children}
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

export default Layout
