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
import { StaticImage } from "gatsby-plugin-image"

const Carousel = loadable(() => import("react-spring-3d-carousel"))

const images = [
  {
    key: uuidv4(),
    content: (
      <StaticImage
        src={"../assets/images/hero/pexels-andrea-piacquadio-3768163.jpg"}
        alt={"pexels-andrea-piacquadio-3768163"}
        height={400}
        width={300}
        placeholder="blurred"
        layout="constrained"
        formats={["webp"]}
        loading={"eager"}
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <StaticImage
        src={"../assets/images/hero/pexels-asa-dugger-1897590.jpg"}
        alt={"pexels-asa-dugger-1897590"}
        height={400}
        width={300}
        placeholder="blurred"
        layout="constrained"
        formats={["webp"]}
        loading={"eager"}
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <StaticImage
        src={"../assets/images/hero/pexels-jamiesx-co-4242520.jpg"}
        alt={"pexels-jamiesx-co-4242520"}
        height={400}
        width={300}
        placeholder="blurred"
        layout="constrained"
        formats={["webp"]}
        loading={"eager"}
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <StaticImage
        src={"../assets/images/hero/pexels-michael-dupuis-4015706.jpg"}
        alt={"pexels-michael-dupuis-4015706"}
        height={400}
        width={300}
        placeholder="blurred"
        layout="constrained"
        formats={["webp"]}
        loading={"eager"}
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <StaticImage
        src={"../assets/images/hero/pexels-olya-prutskova-7121391.jpg"}
        alt={"pexels-olya-prutskova-7121391"}
        height={400}
        width={300}
        placeholder="blurred"
        layout="constrained"
        formats={["webp"]}
        loading={"eager"}
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <StaticImage
        src={"../assets/images/hero/pexels-tainá-bernard-3482526.jpg"}
        alt={"pexels-tainá-bernard-3482526"}
        height={400}
        width={300}
        placeholder="blurred"
        layout="constrained"
        formats={["webp"]}
        loading={"eager"}
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <StaticImage
        src={"../assets/images/hero/pexels-tima-miroshnichenko-5560202.jpg"}
        alt={"pexels-tima-miroshnichenko-5560202"}
        height={400}
        width={300}
        placeholder="blurred"
        layout="constrained"
        formats={["webp"]}
        loading={"eager"}
      />
    ),
  },
]

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
  const [ref, setRef] = useState(0)
  const breakpointWidth = useBreakpointValue({
    base: "90vw",
    sm: "80vw",
    md: "100%",
  })

  const slides = images.map((slide, index) => {
    return {
      key: slide.key,
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
          {slide.content}
        </Flex>
      ),
      onClick: () => setRef(index),
    }
  })
  const breakpoint = useBreakpointValue({ base: 0, sm: 3, md: 3 })

  useInterval(() => {
    ref < 8 ? setRef(ref + 1) : setRef(0)
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
          size="sm"
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
          size="sm"
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
