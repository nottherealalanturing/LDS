import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Link,
  Text,
} from "@chakra-ui/react"
import { CgClose } from "@react-icons/all-files/cg/CgClose"
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu"
import { Link as GLink } from "gatsby"
import React, { useState } from "react"
import config from "../../data/config"
import * as containerStyles from "./styles/navbar.module.css"

const Navbar = () => {
  const [display, setDisplay] = useState("none")
  return (
    <Box overflow="hidden" position="fixed" top={0} width="100vw" zIndex="5">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        py={"6"}
        backgroundColor="black"
        display={{ base: "none", sm: "none", md: "none", lg: "flex" }}
        w="100vw"
      >
        <Flex
          justifyContent="space-between"
          alignItems="center"
          ml="5vw"
          color="white"
        >
          <GLink to={"/"}>
            <Heading as="h1" className={containerStyles.logo}>
              LS.
            </Heading>
          </GLink>

          <Text className={containerStyles.location} mx={8}>
            {config.address.city}, {config.address.country}
          </Text>
        </Flex>

        <div className={containerStyles.navbar}>
          <Link
            as={GLink}
            to={"/"}
            activeClassName={containerStyles.active}
            _focus={{}}
          >
            HOME
          </Link>
          <div className={containerStyles.dropdown}>
            <Link
              as={GLink}
              className={containerStyles.dropbtn}
              activeClassName={containerStyles.active}
              activeStyle={{
                border: "1px solid rgb(189, 188, 188)",
                borderRadius: "10px",
              }}
              to={"/portfolio"}
              _focus={{}}
            >
              PORTFOLIO
            </Link>

            <Box className={containerStyles.dropdownContent}>
              <Link as={GLink} to={"/portfolio/architecture"}>
                ARCHITECTURE
              </Link>
              <Link as={GLink} to={"/portfolio/arts"}>
                ARTS
              </Link>
              <Link as={GLink} to={"/portfolio/beauty"}>
                BEAUTY
              </Link>
              <Link as={GLink} to={"/portfolio/experimental"}>
                EXPERIMENTAL
              </Link>
              <Link as={GLink} to={"/portfolio/fashion"}>
                FASHION
              </Link>
              <Link as={GLink} to={"/portfolio/portraits"}>
                PORTRAITS
              </Link>
              <Link as={GLink} to={"/portfolio/commercials"}>
                COMMERCIALS
              </Link>
            </Box>
          </div>

          <Link
            as={GLink}
            to={"/weddings"}
            activeClassName={containerStyles.active}
            _focus={{}}
          >
            WEDDINGS
          </Link>

          <Link
            as={GLink}
            to={"/contact"}
            activeClassName={containerStyles.active}
            _focus={{}}
          >
            CONTACT
          </Link>
          <Link
            as={GLink}
            to={"/about"}
            activeClassName={containerStyles.active}
            _focus={{}}
          >
            ABOUT
          </Link>
        </div>
      </Flex>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        backgroundColor="#000000b8"
        px="5vw"
        py="3vh"
        color="white"
        display={{ base: "flex", sm: "flex", md: "flex", lg: "none" }}
      >
        <GLink to={"/"}>
          <Heading as="h1" fontWeight="900">
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
          onClick={() => {
            setDisplay("flex")
            console.log('setDisplay("flex")')
          }}
        />
      </Flex>

      <Flex
        w="100vw"
        zIndex={999}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflow="auto"
        flexDirection="column"
        display={display}
        bg="black"
        opacity="0.9"
      >
        <Flex justify="flex-end" px="5vw" mx="5vw" py="3vh" color="white">
          <IconButton
            aria-label="close menu"
            size="lg"
            color={"#fff"}
            bg="transparent"
            icon={<CgClose fontSize="150%" />}
            _focus={{}}
            onClick={() => {
              setDisplay("none")
            }}
          />
        </Flex>

        <Flex flexDir="column" align="center" color="white">
          <Link
            to="/"
            w="90%"
            border="1px solid gray"
            borderRadius="5px"
            textAlign="center"
            m={1}
            onClick={() => setDisplay("none")}
          >
            <Button
              as="a"
              variant="ghost"
              aria-label="home"
              onClick={() => setDisplay("none")}
            >
              HOME
            </Button>
          </Link>
          <Link
            as={GLink}
            w="90%"
            border="1px solid gray"
            borderRadius="5px"
            textAlign="center"
            m={1}
            to="/portfolio"
            onClick={() => setDisplay("none")}
          >
            <Button
              as="a"
              variant="ghost"
              aria-label="portfolio"
              onClick={() => setDisplay("none")}
            >
              PORTFOLIO
            </Button>
          </Link>
          <Link
            as={GLink}
            to="/weddings"
            w="90%"
            border="1px solid gray"
            borderRadius="5px"
            textAlign="center"
            m={1}
            onClick={() => setDisplay("none")}
          >
            <Button
              as="a"
              variant="ghost"
              aria-label="wedding"
              onClick={() => setDisplay("none")}
            >
              WEDDING
            </Button>
          </Link>

          <Link
            as={GLink}
            to="/about"
            w="90%"
            border="1px solid gray"
            borderRadius="5px"
            textAlign="center"
            m={1}
            onClick={() => setDisplay("none")}
          >
            <Button
              as="a"
              variant="ghost"
              aria-label="about"
              onClick={() => setDisplay("none")}
            >
              ABOUT-US
            </Button>
          </Link>
          <Link
            as={GLink}
            to="/contact"
            w="90%"
            border="1px solid gray"
            borderRadius="5px"
            textAlign="center"
            m={1}
            onClick={() => setDisplay("none")}
          >
            <Button
              as="a"
              variant="ghost"
              aria-label="Contact us"
              onClick={() => setDisplay("none")}
            >
              CONTACT
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar
