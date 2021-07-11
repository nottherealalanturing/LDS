import { Box, Flex, Grid, Heading } from "@chakra-ui/layout"
import { Link, Text } from "@chakra-ui/react"
import { Link as GLink, navigate } from "gatsby"
import React from "react"
import { foundingDate, title } from "../../data/config"
import * as stylesL from "./styles/portnavlandscape.module.css"
import * as stylesP from "./styles/portnavportrait.module.css"
import * as stylesWL from "./styles/weddingportnavlandscape.module.css"
import * as stylesWP from "./styles/weddingportnavportrait.module.css"

const leenks = {
  arch: `/portfolio/architecture`,
  arts: `/portfolio/arts`,
  beauty: `/portfolio/beauty`,
  commercials: `/portfolio/commercials`,
  experiment: `/portfolio/experimentation`,
  fash: `/portfolio/fashion`,
  port: `/portfolio/portraits`,
  engagement: `/weddings/portfolio/engagements`,
  traditional: `/weddings/portfolio/traditional`,
  whitewedding: `/weddings/portfolio/whitewedding`,
  otherwedding: `/weddings/portfolio/otherkinds`,
}

export const PortNavLandscape = ({ path }) => {
  return (
    <Flex alignItems="center">
      <Flex flexDir="column" alignItems="center" mx={8} textAlign="center">
        <Heading>LIKE THESE PROJECT?</Heading>
        <Heading>CHECK OUT OUR OTHER WORKS</Heading>
      </Flex>
      <Box /* className={stylesL.drybnCollage} */ mr={24}>
        <Box className={stylesL.drybnCollage__overlay}>
          <Box className={stylesL.drybnCollage__content}>
            <Link
              className={stylesL.drybnCollageItem}
              as={GLink}
              to={leenks.arch}
              _hover={{
                transform: path === leenks.arch ? "scale(1)" : "scale(1.5)",
              }}
              pointerEvents={path === leenks.arch ? "none" : "auto"}
            >
              <Box
                width="100%"
                height="100%"
                textAlign="center"
                position="absolute"
                bg="rgba(0, 0, 0, 0.66)"
                top="0"
                left="0"
                opacity={path === leenks.arch ? 1 : 0}
              >
                <Box
                  transform="translate(0px, -50%)"
                  position="absolute"
                  top="50%"
                  width="80%"
                  marginLeft="10%"
                >
                  <Heading
                    as="h6"
                    fontSize="100%"
                    lineHeight="0px"
                    textTransform="uppercase"
                    letterSpacing="0.03em"
                    fontWeight="600"
                    wordWrap="break-word"
                    p="0"
                  >
                    {"CURRENT"}
                  </Heading>
                </Box>
              </Box>
            </Link>
            <Link
              className={stylesL.drybnCollageItem}
              as={GLink}
              to={leenks.arts}
              _hover={{
                transform: path === leenks.arts ? "scale(1)" : "scale(1.5)",
              }}
              pointerEvents={path === leenks.arts ? "none" : "auto"}
            >
              <Box
                width="100%"
                height="100%"
                textAlign="center"
                position="absolute"
                bg="rgba(0, 0, 0, 0.66)"
                top="0"
                left="0"
                opacity={path === leenks.arts ? 1 : 0}
              >
                <Box
                  transform="translate(0px, -50%)"
                  position="absolute"
                  top="50%"
                  width="80%"
                  marginLeft="10%"
                >
                  <Heading
                    as="h6"
                    fontSize="100%"
                    lineHeight="0px"
                    textTransform="uppercase"
                    letterSpacing="0.03em"
                    fontWeight="600"
                    wordWrap="break-word"
                    p="0"
                  >
                    {"CURRENT"}
                  </Heading>
                </Box>
              </Box>
            </Link>

            <Link
              className={stylesL.drybnCollageItem}
              as={GLink}
              to={leenks.beauty}
              _hover={{
                transform: path === leenks.beauty ? "scale(1)" : "scale(1.5)",
              }}
              pointerEvents={path === leenks.beauty ? "none" : "auto"}
            >
              <Box
                width="100%"
                height="100%"
                textAlign="center"
                position="absolute"
                bg="rgba(0, 0, 0, 0.66)"
                top="0"
                left="0"
                opacity={path === leenks.beauty ? 1 : 0}
              >
                <Box
                  transform="translate(0px, -50%)"
                  position="absolute"
                  top="50%"
                  width="80%"
                  marginLeft="10%"
                >
                  <Heading
                    as="h6"
                    fontSize="100%"
                    lineHeight="0px"
                    textTransform="uppercase"
                    letterSpacing="0.03em"
                    fontWeight="600"
                    wordWrap="break-word"
                    p="0"
                  >
                    {"CURRENT"}
                  </Heading>
                </Box>
              </Box>
            </Link>
            <Box
              className={[
                stylesL.drybnCollageItem,
                stylesL.drybnCollageItemHeading,
              ].join(" ")}
              onClick={() => navigate("/")}
              borderRadius="10px"
            >
              <Heading
                as="h2"
                fontWeight="900"
                fontSize="100%"
                textTransform="uppercase"
              >
                {title.slice(0, 7)}
                <br />
                <span>{title.slice(8)}</span>
              </Heading>
            </Box>

            <Link
              className={stylesL.drybnCollageItem}
              as={GLink}
              to={leenks.commercials}
              _hover={{
                transform:
                  path === leenks.commercials ? "scale(1)" : "scale(1.5)",
              }}
              pointerEvents={path === leenks.commercials ? "none" : "auto"}
            >
              <Box
                width="100%"
                height="100%"
                textAlign="center"
                position="absolute"
                bg="rgba(0, 0, 0, 0.66)"
                top="0"
                left="0"
                opacity={path === leenks.commercials ? 1 : 0}
              >
                <Box
                  transform="translate(0px, -50%)"
                  position="absolute"
                  top="50%"
                  width="80%"
                  marginLeft="10%"
                >
                  <Heading
                    as="h6"
                    fontSize="100%"
                    lineHeight="0px"
                    textTransform="uppercase"
                    letterSpacing="0.03em"
                    fontWeight="600"
                    wordWrap="break-word"
                    p="0"
                  >
                    {"CURRENT"}
                  </Heading>
                </Box>
              </Box>
            </Link>

            <Link
              className={stylesL.drybnCollageItem}
              as={GLink}
              to={leenks.experiment}
              _hover={{
                transform:
                  path === leenks.experiment ? "scale(1)" : "scale(1.5)",
              }}
              pointerEvents={path === leenks.experiment ? "none" : "auto"}
            >
              <Box
                width="100%"
                height="100%"
                textAlign="center"
                position="absolute"
                bg="rgba(0, 0, 0, 0.66)"
                top="0"
                left="0"
                opacity={path === leenks.experiment ? 1 : 0}
              >
                <Box
                  transform="translate(0px, -50%)"
                  position="absolute"
                  top="50%"
                  width="80%"
                  marginLeft="10%"
                >
                  <Heading
                    as="h6"
                    fontSize="100%"
                    lineHeight="0px"
                    textTransform="uppercase"
                    letterSpacing="0.03em"
                    fontWeight="600"
                    wordWrap="break-word"
                    p="0"
                  >
                    {"CURRENT"}
                  </Heading>
                </Box>
              </Box>
            </Link>

            <Link
              className={stylesL.drybnCollageItem}
              as={GLink}
              to={leenks.fash}
              _hover={{
                transform: path === leenks.fash ? "scale(1)" : "scale(1.5)",
              }}
              pointerEvents={path === leenks.fash ? "none" : "auto"}
            >
              <Box
                width="100%"
                height="100%"
                textAlign="center"
                position="absolute"
                bg="rgba(0, 0, 0, 0.66)"
                top="0"
                left="0"
                opacity={path === leenks.fash ? 1 : 0}
              >
                <Box
                  transform="translate(0px, -50%)"
                  position="absolute"
                  top="50%"
                  width="80%"
                  marginLeft="10%"
                >
                  <Heading
                    as="h6"
                    fontSize="100%"
                    lineHeight="0px"
                    textTransform="uppercase"
                    letterSpacing="0.03em"
                    fontWeight="600"
                    wordWrap="break-word"
                    p="0"
                  >
                    {"CURRENT"}
                  </Heading>
                </Box>
              </Box>
            </Link>

            <Link
              className={stylesL.drybnCollageItem}
              as={GLink}
              to={leenks.port}
              _hover={{
                transform: path === leenks.port ? "scale(1)" : "scale(1.5)",
              }}
              pointerEvents={path === leenks.port ? "none" : "auto"}
            >
              <Box
                width="100%"
                height="100%"
                textAlign="center"
                position="absolute"
                bg="rgba(0, 0, 0, 0.66)"
                top="0"
                left="0"
                opacity={path === leenks.port ? 1 : 0}
              >
                <Box
                  transform="translate(0px, -50%)"
                  position="absolute"
                  top="50%"
                  width="80%"
                  marginLeft="10%"
                >
                  <Heading
                    as="h6"
                    fontSize="100%"
                    lineHeight="0px"
                    textTransform="uppercase"
                    letterSpacing="0.03em"
                    fontWeight="600"
                    wordWrap="break-word"
                    p="0"
                  >
                    {"CURRENT"}
                  </Heading>
                </Box>
              </Box>
            </Link>
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}

export const PortNavPortrait = ({ path }) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      w="100vw"
    >
      <Flex
        flexDir="column"
        alignItems="center"
        mx={8}
        textAlign="center"
        my={4}
      >
        <Heading>LIKE THESE PROJECT?</Heading>
        <Heading>CHECK OUT OUR OTHER WORKS</Heading>
      </Flex>

      <Box /* className={stylesP.drybnCollage} */>
        <Box className={stylesP.drybnCollage__overlay}>
          <Box className={stylesP.drybnCollage__content}>
            <Grid
              templateColumns={`repeat(2, 1fr)`}
              gap={2}
              alignItems="center"
              justifyContent="center"
            >
              <Flex
                as={GLink}
                to={leenks.arch}
                w="100%"
                h="100px"
                backgroundImage='url("/portfolio-index/architecture.jpg");'
                backgroundSize="cover"
                pointerEvents={path === leenks.arch ? "none" : "auto"}
                justifyContent="center"
                alignItems="center"
              >
                <Flex display={path === leenks.arch ? "block" : "none"}>
                  <Heading
                    as="h6"
                    fontSize="100%"
                    lineHeight="0px"
                    textTransform="uppercase"
                    letterSpacing="0.03em"
                    fontWeight="600"
                    wordWrap="break-word"
                    p="0"
                  >
                    {"CURRENT"}
                  </Heading>
                </Flex>
              </Flex>
              <Flex
                as={GLink}
                to={leenks.arts}
                w="100%"
                h="100px"
                backgroundImage='url("/portfolio-index/arts.jpg");'
                backgroundSize="cover"
                pointerEvents={path === leenks.arts ? "none" : "auto"}
                justifyContent="center"
                alignItems="center"
              >
                <Flex display={path === leenks.arts ? "block" : "none"}>
                  <Heading
                    opacity={path === leenks.arts ? 1 : 0}
                    as="h6"
                    fontSize="100%"
                    lineHeight="0px"
                    textTransform="uppercase"
                    letterSpacing="0.03em"
                    fontWeight="600"
                    wordWrap="break-word"
                    p="0"
                  >
                    {"CURRENT"}
                  </Heading>
                </Flex>
              </Flex>
              <Flex
                as={GLink}
                to={leenks.beauty}
                w="100%"
                h="100px"
                backgroundImage='url("/portfolio-index/beauty.jpg");'
                backgroundSize="contain"
                pointerEvents={path === leenks.beauty ? "none" : "auto"}
                justifyContent="center"
                alignItems="center"
              >
                <Flex display={path === leenks.beauty ? "block" : "none"}>
                  <Heading
                    as="h6"
                    fontSize="100%"
                    lineHeight="0px"
                    textTransform="uppercase"
                    letterSpacing="0.03em"
                    fontWeight="600"
                    wordWrap="break-word"
                    p="0"
                  >
                    {"CURRENT"}
                  </Heading>
                </Flex>
              </Flex>

              <Flex
                as={GLink}
                to={leenks.commercials}
                w="100%"
                h="100px"
                backgroundImage='url("/portfolio-index/commercials.jpg");'
                backgroundSize="cover"
                pointerEvents={path === leenks.commercials ? "none" : "auto"}
                justifyContent="center"
                alignItems="center"
              >
                <Flex display={path === leenks.commercials ? "block" : "none"}>
                  <Heading
                    as="h6"
                    fontSize="100%"
                    lineHeight="0px"
                    textTransform="uppercase"
                    letterSpacing="0.03em"
                    fontWeight="600"
                    wordWrap="break-word"
                    p="0"
                  >
                    {"CURRENT"}
                  </Heading>
                </Flex>
              </Flex>

              <Flex
                as={GLink}
                to={leenks.experiment}
                w="100%"
                h="100px"
                backgroundImage='url("/portfolio-index/experimentation.jpg");'
                backgroundSize="cover"
                pointerEvents={path === leenks.experiment ? "none" : "auto"}
                justifyContent="center"
                alignItems="center"
              >
                <Flex display={path === leenks.experiment ? "block" : "none"}>
                  <Heading
                    as="h6"
                    fontSize="100%"
                    lineHeight="0px"
                    textTransform="uppercase"
                    letterSpacing="0.03em"
                    fontWeight="600"
                    wordWrap="break-word"
                    p="0"
                  >
                    {"CURRENT"}
                  </Heading>
                </Flex>
              </Flex>

              <Flex
                as={GLink}
                to={leenks.fash}
                w="100%"
                h="100px"
                backgroundImage='url("/portfolio-index/fashion.jpg");'
                backgroundSize="cover"
                pointerEvents={path === leenks.fash ? "none" : "auto"}
                justifyContent="center"
                alignItems="center"
              >
                <Flex display={path === leenks.fash ? "block" : "none"}>
                  <Heading
                    as="h6"
                    fontSize="100%"
                    lineHeight="0px"
                    textTransform="uppercase"
                    letterSpacing="0.03em"
                    fontWeight="600"
                    wordWrap="break-word"
                    p="0"
                  >
                    {"CURRENT"}
                  </Heading>
                </Flex>
              </Flex>

              <Flex
                as={GLink}
                to={leenks.port}
                w="100%"
                h="100px"
                backgroundImage='url("/portfolio-index/portraits.jpg");'
                backgroundSize="cover"
                pointerEvents={path === leenks.port ? "none" : "auto"}
                justifyContent="center"
                alignItems="center"
              >
                <Flex display={path === leenks.port ? "block" : "none"}>
                  <Heading
                    as="h6"
                    fontSize="100%"
                    lineHeight="0px"
                    textTransform="uppercase"
                    letterSpacing="0.03em"
                    fontWeight="600"
                    wordWrap="break-word"
                    p="0"
                  >
                    {"CURRENT"}
                  </Heading>
                </Flex>
              </Flex>
            </Grid>
          </Box>
        </Box>
      </Box>

      <Link
        my={1}
        border="1px solid white"
        p={2}
        borderRadius="md"
        textAlign="center"
        fontWeight="800"
        as={GLink}
        to={`/portfolio`}
        textDecoration="none !important"
      >
        Back TO PORTFOLIO
      </Link>
      <Text m={1} fontWeight={800} fontSize={"0.9vw"}>
        {title}©{foundingDate}
      </Text>
    </Flex>
  )
}

export const WeddingPortNavLandscape = ({ path }) => {
  return (
    <Flex alignItems="center">
      <Flex flexDir="column" alignItems="center" mx={8} textAlign="center">
        {/* <Heading>LIKE THESE PROJECT?</Heading> */}
        <Heading>CHECK OUT OUR OTHER CATALOGUES</Heading>
      </Flex>
      <Box /* className={stylesL.drybnCollage} */ mr={24}>
        <Box className={stylesWL.drybnCollage__overlay}>
          <Box className={stylesWL.drybnCollage__content}>
            <Link
              className={stylesWL.drybnCollageItem}
              as={GLink}
              to={leenks.traditional}
              _hover={{
                transform:
                  path === leenks.traditional ? "scale(1)" : "scale(1.5)",
              }}
              pointerEvents={path === leenks.traditional ? "none" : "auto"}
            >
              <Box
                width="100%"
                height="100%"
                textAlign="center"
                position="absolute"
                bg="rgba(0, 0, 0, 0.66)"
                top="0"
                left="0"
                opacity={path === leenks.traditional ? 1 : 0}
              >
                <Box
                  transform="translate(0px, -50%)"
                  position="absolute"
                  top="50%"
                  width="80%"
                  marginLeft="10%"
                >
                  <Heading
                    as="h6"
                    fontSize="100%"
                    lineHeight="0px"
                    textTransform="uppercase"
                    letterSpacing="0.03em"
                    fontWeight="600"
                    wordWrap="break-word"
                    p="0"
                  >
                    {"CURRENT"}
                  </Heading>
                </Box>
              </Box>
            </Link>
            <Link
              className={stylesWL.drybnCollageItem}
              as={GLink}
              to={leenks.whitewedding}
              _hover={{
                transform:
                  path === leenks.whitewedding ? "scale(1)" : "scale(1.5)",
              }}
              pointerEvents={path === leenks.whitewedding ? "none" : "auto"}
            >
              <Box
                width="100%"
                height="100%"
                textAlign="center"
                position="absolute"
                bg="rgba(0, 0, 0, 0.66)"
                top="0"
                left="0"
                opacity={path === leenks.whitewedding ? 1 : 0}
              >
                <Box
                  transform="translate(0px, -50%)"
                  position="absolute"
                  top="50%"
                  width="80%"
                  marginLeft="10%"
                >
                  <Heading
                    as="h6"
                    fontSize="100%"
                    lineHeight="0px"
                    textTransform="uppercase"
                    letterSpacing="0.03em"
                    fontWeight="600"
                    wordWrap="break-word"
                    p="0"
                  >
                    {"CURRENT"}
                  </Heading>
                </Box>
              </Box>
            </Link>

            <Box
              className={[
                stylesWL.drybnCollageItem,
                stylesWL.drybnCollageItemHeading,
              ].join(" ")}
              onClick={() => navigate("/weddings")}
              borderRadius="10px"
            >
              <Heading
                as="h2"
                fontWeight="900"
                fontSize="100%"
                textTransform="uppercase"
              >
                {title.slice(0, 7)}
                <br />
                <span>{title.slice(8)}</span>
              </Heading>
            </Box>

            <Link
              className={stylesWL.drybnCollageItem}
              as={GLink}
              to={leenks.engagement}
              _hover={{
                transform:
                  path === leenks.engagement ? "scale(1)" : "scale(1.5)",
              }}
              pointerEvents={path === leenks.engagement ? "none" : "auto"}
            >
              <Box
                width="100%"
                height="100%"
                textAlign="center"
                position="absolute"
                bg="rgba(0, 0, 0, 0.66)"
                top="0"
                left="0"
                opacity={path === leenks.engagement ? 1 : 0}
              >
                <Box
                  transform="translate(0px, -50%)"
                  position="absolute"
                  top="50%"
                  width="80%"
                  marginLeft="10%"
                >
                  <Heading
                    as="h6"
                    fontSize="100%"
                    lineHeight="0px"
                    textTransform="uppercase"
                    letterSpacing="0.03em"
                    fontWeight="600"
                    wordWrap="break-word"
                    p="0"
                  >
                    {"CURRENT"}
                  </Heading>
                </Box>
              </Box>
            </Link>

            <Link
              className={stylesWL.drybnCollageItem}
              as={GLink}
              to={leenks.otherwedding}
              _hover={{
                transform:
                  path === leenks.otherwedding ? "scale(1)" : "scale(1.5)",
              }}
              pointerEvents={path === leenks.otherwedding ? "none" : "auto"}
            >
              <Box
                width="100%"
                height="100%"
                textAlign="center"
                position="absolute"
                bg="rgba(0, 0, 0, 0.66)"
                top="0"
                left="0"
                opacity={path === leenks.otherwedding ? 1 : 0}
              >
                <Box
                  transform="translate(0px, -50%)"
                  position="absolute"
                  top="50%"
                  width="80%"
                  marginLeft="10%"
                >
                  <Heading
                    as="h6"
                    fontSize="100%"
                    lineHeight="0px"
                    textTransform="uppercase"
                    letterSpacing="0.03em"
                    fontWeight="600"
                    wordWrap="break-word"
                    p="0"
                  >
                    {"CURRENT"}
                  </Heading>
                </Box>
              </Box>
            </Link>
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}

export const WeddingPortNavPortrait = ({ path }) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      w="100vw"
    >
      <Flex
        flexDir="column"
        alignItems="center"
        mx={8}
        textAlign="center"
        my={4}
      >
        <Heading>LIKE THESE PROJECT?</Heading>
        <Heading>CHECK OUT OUR OTHER WORKS</Heading>
      </Flex>

      <Box /* className={stylesP.drybnCollage} */>
        <Box className={stylesWP.drybnCollage__overlay}>
          <Box className={stylesWP.drybnCollage__content}>
            <Grid
              templateColumns={`repeat(2, 1fr)`}
              gap={2}
              alignItems="center"
              justifyContent="center"
            >
              <Flex
                as={GLink}
                to={leenks.whitewedding}
                w="100%"
                h="100px"
                backgroundImage='url("/wedding-portfolio-index/whitewedding.jpg");'
                backgroundSize="cover"
                pointerEvents={path === leenks.whitewedding ? "none" : "auto"}
                justifyContent="center"
                alignItems="center"
              >
                <Flex display={path === leenks.whitewedding ? "block" : "none"}>
                  <Heading
                    as="h6"
                    fontSize="100%"
                    lineHeight="0px"
                    textTransform="uppercase"
                    letterSpacing="0.03em"
                    fontWeight="600"
                    wordWrap="break-word"
                    p="0"
                  >
                    {"CURRENT"}
                  </Heading>
                </Flex>
              </Flex>
              <Flex
                as={GLink}
                to={leenks.traditional}
                w="100%"
                h="100px"
                backgroundImage='url("/wedding-portfolio-index/traditional.jpg");'
                backgroundSize="cover"
                pointerEvents={path === leenks.traditional ? "none" : "auto"}
                justifyContent="center"
                alignItems="center"
              >
                <Flex display={path === leenks.traditional ? "block" : "none"}>
                  <Heading
                    opacity={path === leenks.traditional ? 1 : 0}
                    as="h6"
                    fontSize="100%"
                    lineHeight="0px"
                    textTransform="uppercase"
                    letterSpacing="0.03em"
                    fontWeight="600"
                    wordWrap="break-word"
                    p="0"
                  >
                    {"CURRENT"}
                  </Heading>
                </Flex>
              </Flex>
              <Flex
                as={GLink}
                to={leenks.engagement}
                w="100%"
                h="100px"
                backgroundImage='url("/wedding-portfolio-index/engagements.jpg");'
                backgroundSize="cover"
                pointerEvents={path === leenks.engagement ? "none" : "auto"}
                justifyContent="center"
                alignItems="center"
              >
                <Flex display={path === leenks.engagement ? "block" : "none"}>
                  <Heading
                    as="h6"
                    fontSize="100%"
                    lineHeight="0px"
                    textTransform="uppercase"
                    letterSpacing="0.03em"
                    fontWeight="600"
                    wordWrap="break-word"
                    p="0"
                  >
                    {"CURRENT"}
                  </Heading>
                </Flex>
              </Flex>

              <Flex
                as={GLink}
                to={leenks.otherwedding}
                w="100%"
                h="100px"
                backgroundImage='url("/wedding-portfolio-index/otherkinds...lol.jpg");'
                backgroundSize="cover"
                pointerEvents={path === leenks.otherwedding ? "none" : "auto"}
                justifyContent="center"
                alignItems="center"
              >
                <Flex display={path === leenks.otherwedding ? "block" : "none"}>
                  <Heading
                    as="h6"
                    fontSize="100%"
                    lineHeight="0px"
                    textTransform="uppercase"
                    letterSpacing="0.03em"
                    fontWeight="600"
                    wordWrap="break-word"
                    p="0"
                  >
                    {"CURRENT"}
                  </Heading>
                </Flex>
              </Flex>
            </Grid>
          </Box>
        </Box>
      </Box>

      <Link
        my={1}
        border="1px solid white"
        p={2}
        borderRadius="md"
        textAlign="center"
        fontWeight="800"
        as={GLink}
        to={`weddings/portfolio`}
        textDecoration="none !important"
      >
        Back TO PORTFOLIO
      </Link>
      <Text m={1} fontWeight={800} fontSize={"0.9vw"}>
        {title}©{foundingDate}
      </Text>
    </Flex>
  )
}
