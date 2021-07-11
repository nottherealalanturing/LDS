import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Link,
  useDisclosure,
} from "@chakra-ui/react"
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu"
import { Link as GLink } from "gatsby"
import React from "react"
import config from "../../data/config"
import "./styles/weddingNavbar.css"

const WeddingNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box overflow="hidden" position="fixed" top={0} width="100vw" zIndex="5">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        py={"2"}
        backgroundColor="black"
        display={{ base: "none", sm: "none", md: "none", lg: "flex" }}
        w="100%"
        borderBottom="1px solid white"
      >
        <Flex
          w="100%"
          justifyContent="center"
          alignItems="center"
          /* py="4" */
          className={"navbar"}
          /* alignItems="flex-start" */
          boxShadow="lg"
        >
          <Link
            as={GLink}
            to={"/weddings"}
            activeClassName={"active"}
            _focus={{}}
            /* mx={12} */
          >
            HOME
          </Link>
          <Link
            as={GLink}
            to={"/weddings/portfolio"}
            activeClassName={"active"}
            _focus={{}}
            /* mx={12} */
          >
            PORTFOLIO
          </Link>

          <GLink to={"/"}>
            <Heading as="h1" className={"logo"} mx={12}>
              LS
            </Heading>
          </GLink>

          <Link
            as={GLink}
            to={"/weddings/gallery"}
            activeClassName={"active"}
            _focus={{}}
            /* mx={12} */
          >
            GALLERY
          </Link>
          <Link
            as={GLink}
            to={"/weddings/stories"}
            activeClassName={"active"}
            _focus={{}}
            /* mx={12} */
          >
            STORIES
          </Link>
        </Flex>
      </Flex>

      <Flex
        justifyContent="space-between"
        alignItems="center"
        backgroundColor="#0006"
        px="5vw"
        py="3vh"
        color="white"
        display={{ base: "flex", sm: "flex", md: "flex", lg: "none" }}
      >
        <GLink to={"/"}>
          <Heading as="h1" fontWeight="900" ml={2}>
            LS.
          </Heading>
        </GLink>
        <IconButton
          aria-label="open menu"
          size="lg"
          color={"#fff"}
          bg="transparent"
          icon={<GiHamburgerMenu fontSize="150%" />}
          _focus={{}}
          onClick={onOpen}
        />
      </Flex>

      <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="black">
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            <Heading textAlign="center" fontSize="5vw">
              {config.title}
            </Heading>
          </DrawerHeader>
          <DrawerBody>
            <Flex flexDir="column" h="100%" alignItems="center" my={"5vh"}>
              <Link
                as={GLink}
                to="/weddings/"
                w="90%"
                border="1px solid gray"
                borderRadius="5px"
                textAlign="center"
                textDecoration="none !important"
                m={1}
              >
                <Button
                  as="a"
                  variant="ghost"
                  aria-label="home"
                  _focus={{}}
                  _hover={{}}
                  /* onClick={() => setDisplay("none")} */
                >
                  HOME
                </Button>
              </Link>

              <Link
                as={GLink}
                to="/weddings/portfolio"
                w="90%"
                border="1px solid gray"
                borderRadius="5px"
                textAlign="center"
                textDecoration="none !important"
                m={1}
              >
                <Button
                  as="a"
                  variant="ghost"
                  aria-label="portfolio"
                  _focus={{}}
                  _hover={{}}
                  /* onClick={() => setDisplay("none")} */
                >
                  PORTFOLIO
                </Button>
              </Link>

              <Link
                as={GLink}
                to="/weddings/gallery"
                w="90%"
                border="1px solid gray"
                borderRadius="5px"
                textAlign="center"
                textDecoration="none !important"
                m={1}
              >
                <Button
                  as="a"
                  variant="ghost"
                  aria-label="gallery"
                  _focus={{}}
                  _hover={{}}
                  /* onClick={() => setDisplay("none")} */
                >
                  GALLERY
                </Button>
              </Link>

              <Link
                as={GLink}
                to="/weddings/stories"
                w="90%"
                border="1px solid gray"
                borderRadius="5px"
                textAlign="center"
                textDecoration="none !important"
                m={1}
              >
                <Button
                  as="a"
                  variant="ghost"
                  aria-label="stories"
                  _focus={{}}
                  _hover={{}}
                  /* onClick={() => setDisplay("none")} */
                >
                  STORIES
                </Button>
              </Link>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default WeddingNav
