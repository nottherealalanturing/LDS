import {
  Button,
  Center,
  Flex,
  Icon,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react"
import { GrFormNext } from "@react-icons/all-files/gr/GrFormNext"
import { GrFormPrevious } from "@react-icons/all-files/gr/GrFormPrevious"
import { graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useRef, useState } from "react"
import { config } from "react-spring"
import { v4 as uuidv4 } from "uuid"
import { foundingDate, title } from "../../data/config"
import loadable from "@loadable/component"

const Carousel = loadable(() => import("react-spring-3d-carousel"))

const useInterval = (callback, delay) => {
  const savedCallback = useRef()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    let id = setInterval(() => {
      savedCallback.current()
    }, delay)
    return () => clearInterval(id)
  }, [delay])
}

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      allCloudinaryMedia(
        filter: { public_id: { regex: "assets/hero/" } }
        limit: 10
      ) {
        edges {
          node {
            secure_url
            id
          }
        }
      }
    }
  `)

  const [ref, setRef] = useState(0)
  const breakpointWidth = useBreakpointValue({
    base: "90vw",
    sm: "80vw",
    md: "100%",
  })

  const slides = data.allCloudinaryMedia.edges.map((slide, index) => {
    return {
      key: uuidv4(),
      content: (
        <Flex
          alignItems="center"
          justifyContent="center"
          boxShadow="md"
          p="6"
          rounded="md"
          bg="white"
          mt={12}
          w={breakpointWidth}
        >
          <img
            src={slide.node.secure_url}
            alt={slide.node.id}
            height={"400px"}
            width={"300px"}
            loading="eager"
          />
        </Flex>
      ),
      onClick: () => setRef(index),
    }
  })
  const breakpoint = useBreakpointValue({ base: 0, sm: 3, md: 3 })

  useInterval(() => {
    ref < 10 ? setRef(ref + 1) : setRef(0)
  }, 9000)

  return (
    <>
      <Carousel
        slides={slides}
        goToSlide={ref}
        offsetRadius={breakpoint}
        animationConfig={config.stiff}
        showNavigation={false}
      />
      <Center /* pos="fixed" bottom="1vh" left="40vw" */>
        <Button
          mx={4}
          color="black"
          _focus={{}}
          _hover={{ color: "black", bg: "white" }}
          onClick={() => {
            setRef(e => e - 1)
          }}
        >
          <Icon as={GrFormPrevious} />
        </Button>
        <Button
          mx={4}
          color="black"
          _focus={{}}
          _hover={{ color: "black", bg: "white" }}
          onClick={() => {
            setRef(e => e + 1)
          }}
        >
          <Icon as={GrFormNext} />
        </Button>
      </Center>
      <Text textAlign="right" mx={1} fontWeight={800} fontSize="0.9vw">
        {title} © {foundingDate}
      </Text>
    </>
  )
}

export default Hero
