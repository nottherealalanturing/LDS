import {
  Center,
  Flex,
  Heading,
  IconButton,
  Link,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import config from "../../data/config"
import Address from "../components/contact-components/address"
import Email from "../components/contact-components/email"
import Facebook from "../components/contact-components/facebook"
import Instagram from "../components/contact-components/instagram"
import Phone from "../components/contact-components/phone"
import Twitter from "../components/contact-components/twitter"
import Whatsapp from "../components/contact-components/whatsapp"

const About = () => {
  return (
    <Flex
      flexDirection="column"
      mt={{ base: "40%", sm: "30%", dn: "30%", md: "20%", lg: "10%", xl: "5%" }}
    >
      <StaticImage
        src="../assets/images/contact/cont.jpg"
        alt="contact"
        layout="constrained"
        aspectRatio={5}
      />
      <Center my={4}>
        <Heading fontWeight="900" fontSize={"5vh"} textAlign="center">
          LET'S MAKE SOMETHING MAGICAL TOGETHER.
        </Heading>
      </Center>
      <Flex my={4} alignItems="center" justifyContent="space-around">
        <Link href={config.social.instagram}>
          <Instagram />
        </Link>
        <Link href={config.social.twitter}>
          <Twitter />
        </Link>

        <Popover>
          <PopoverTrigger>
            <IconButton
              bg="transparent"
              aria-label="Mail Us"
              size="lg"
              icon={<Phone />}
              _focus={{}}
            />
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader color="black">PHONE</PopoverHeader>
            <PopoverBody color="black">PHONE DETAILS APPEARS HERE</PopoverBody>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger>
            <IconButton
              bg="transparent"
              aria-label="Mail Us"
              size="lg"
              icon={<Address />}
              _focus={{}}
            />
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader color="black">ADDRESS</PopoverHeader>
            <PopoverBody color="black">
              ADDRESS DETAILS APPEARS HERE
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger>
            <IconButton
              bg="transparent"
              aria-label="Mail Us"
              size="lg"
              icon={<Email />}
              _focus={{}}
            />
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader color="black">EMAIL</PopoverHeader>
            <PopoverBody color="black">EMAIL ADDRESS APPEARS HERE</PopoverBody>
          </PopoverContent>
        </Popover>
        <Link href={config.social.facebook}>
          <Facebook />
        </Link>
        <Link href={config.social.whatsapp}>
          <Whatsapp />
        </Link>
      </Flex>
    </Flex>
  )
}

export default About
