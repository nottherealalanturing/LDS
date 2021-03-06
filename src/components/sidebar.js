import { Box, Link, VStack } from "@chakra-ui/layout"
import { Flex, Icon, Tooltip } from "@chakra-ui/react"
import { FaBehance } from "@react-icons/all-files/fa/FaBehance"
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"
import { Link as GLink } from "gatsby"
import React from "react"
import config from "../../data/config"

const Logo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 26.4 306.13"
    height="20vh"
    width="5vw"
  >
    <g>
      <path
        d="M208.19,553.8H182.26v-5h21.51V535.54h4.42Z"
        transform="translate(-182.08 -247.67)"
        fill="#fff"
      />
      <path
        d="M182.26,525.1v-4.45l25.93-9.86V516l-6.47,2.41v9.06l6.47,2.37V535Zm15.92-5.8L188,522.88l10.18,3.72Z"
        transform="translate(-182.08 -247.67)"
        fill="#fff"
      />
      <path
        d="M182.26,507.5l19.61-7-19.61-6.94v-5.3l25.93,10.12v4.23L182.26,512.8Z"
        transform="translate(-182.08 -247.67)"
        fill="#fff"
      />
      <path
        d="M208.19,485.49H182.26v-9.42a13.94,13.94,0,0,1,1-5.57,11.11,11.11,0,0,1,6.88-6.4,15.31,15.31,0,0,1,5-.81,15.13,15.13,0,0,1,5.35.9,11.43,11.43,0,0,1,4.09,2.57,11.57,11.57,0,0,1,2.62,4,14.07,14.07,0,0,1,.94,5.28Zm-13-17.12a11,11,0,0,0-3.43.51,7.68,7.68,0,0,0-2.71,1.5,6.7,6.7,0,0,0-1.75,2.42,8.25,8.25,0,0,0-.62,3.27v4.38h17.09v-4.38a7.84,7.84,0,0,0-.66-3.3,6.64,6.64,0,0,0-1.81-2.41,7.85,7.85,0,0,0-2.72-1.48A10.85,10.85,0,0,0,195.19,468.37Z"
        transform="translate(-182.08 -247.67)"
        fill="#fff"
      />
      <path
        d="M203.77,441.35h4.42v18H182.26V441.68h4.42v12.63h6.24V443.39H197v10.92h6.76Z"
        transform="translate(-182.08 -247.67)"
        fill="#fff"
      />
      <path
        d="M195,439.52a13.48,13.48,0,0,1-4.69-.85,13,13,0,0,1-4.14-2.5,12.65,12.65,0,0,1-3-4,12.45,12.45,0,0,1-1.13-5.4,11.74,11.74,0,0,1,1.57-6.19,10,10,0,0,1,4.09-3.89l2.66,3.87a6.53,6.53,0,0,0-1.84,1.24,6.21,6.21,0,0,0-1.19,1.57,7.51,7.51,0,0,0-.64,1.75,8.61,8.61,0,0,0-.2,1.79,6.83,6.83,0,0,0,.77,3.31,7.24,7.24,0,0,0,2,2.33,8.84,8.84,0,0,0,2.77,1.41,10.45,10.45,0,0,0,3.09.47,10.19,10.19,0,0,0,3.3-.54,9,9,0,0,0,2.8-1.56,7.7,7.7,0,0,0,1.93-2.41,6.51,6.51,0,0,0,.73-3.08,8,8,0,0,0-.22-1.83,6.91,6.91,0,0,0-.69-1.8,7.07,7.07,0,0,0-1.23-1.59,5.5,5.5,0,0,0-1.8-1.17l2.37-4.13a7.86,7.86,0,0,1,2.57,1.78,11,11,0,0,1,1.88,2.59,12.56,12.56,0,0,1,1.17,3.08,13.45,13.45,0,0,1,.4,3.22,11,11,0,0,1-1.16,5.07,13.36,13.36,0,0,1-3.05,4,14.2,14.2,0,0,1-4.27,2.59A13.38,13.38,0,0,1,195,439.52Z"
        transform="translate(-182.08 -247.67)"
        fill="#fff"
      />
      <path
        d="M208.19,412.91H182.3v-5h12.3L182.26,397v-5.55l11.5,9.93,14.43-10.55v5.66L197,404.55l3.47,3.32h7.74Z"
        transform="translate(-182.08 -247.67)"
        fill="#fff"
      />
      <path
        d="M189.05,364.72a6.12,6.12,0,0,0-.69.93,11.74,11.74,0,0,0-.86,1.64,15.21,15.21,0,0,0-.71,2.1,9.41,9.41,0,0,0-.29,2.3,5.08,5.08,0,0,0,.77,3.1,2.52,2.52,0,0,0,2.15,1,2.16,2.16,0,0,0,1.33-.39,3.06,3.06,0,0,0,.93-1.11,9.38,9.38,0,0,0,.73-1.84c.22-.75.45-1.6.7-2.58.34-1.26.7-2.41,1.09-3.45a9.57,9.57,0,0,1,1.46-2.63,6.24,6.24,0,0,1,2.1-1.66,7,7,0,0,1,3-.58,7.52,7.52,0,0,1,3.56.78,6.65,6.65,0,0,1,2.4,2.12,9.37,9.37,0,0,1,1.33,3.07,15.3,15.3,0,0,1,.42,3.63,19.33,19.33,0,0,1-.88,5.77,17.71,17.71,0,0,1-2.48,5.11l-4.35-2.23a6.81,6.81,0,0,0,.86-1.18,17.2,17.2,0,0,0,1.06-2,16.69,16.69,0,0,0,.9-2.59,11.91,11.91,0,0,0,.36-2.92q0-4.17-2.66-4.17a2.19,2.19,0,0,0-1.43.48,4.06,4.06,0,0,0-1,1.35,12.63,12.63,0,0,0-.8,2.12c-.25.83-.52,1.75-.81,2.77a23.64,23.64,0,0,1-1.11,3.23,8.6,8.6,0,0,1-1.42,2.29,5.37,5.37,0,0,1-1.9,1.36,6.5,6.5,0,0,1-2.58.46,8,8,0,0,1-3.5-.73,7.09,7.09,0,0,1-2.56-2,9,9,0,0,1-1.55-3,12.51,12.51,0,0,1-.53-3.69,14.32,14.32,0,0,1,.86-5,18.42,18.42,0,0,1,2-4Z"
        transform="translate(-182.08 -247.67)"
        fill="#fff"
      />
      <path
        d="M186.68,338.58v8.28h21.51v5H186.68v8.28h-4.42V338.58Z"
        transform="translate(-182.08 -247.67)"
        fill="#fff"
      />
      <path
        d="M203.91,324.41a5.76,5.76,0,0,0-.73-3,5.85,5.85,0,0,0-1.89-2,7.93,7.93,0,0,0-2.69-1.06,15.29,15.29,0,0,0-3.12-.31H182.26v-5h13.22a18.71,18.71,0,0,1,5,.64,11.41,11.41,0,0,1,4.09,2,9.76,9.76,0,0,1,2.78,3.53,11.92,11.92,0,0,1,1,5.15,11.76,11.76,0,0,1-1.08,5.27,9.85,9.85,0,0,1-2.85,3.52,11.22,11.22,0,0,1-4.1,2,19.49,19.49,0,0,1-4.86.6H182.26v-5h13.22a15.47,15.47,0,0,0,3.16-.31,7.88,7.88,0,0,0,2.68-1.06,5.75,5.75,0,0,0,1.88-1.95A5.67,5.67,0,0,0,203.91,324.41Z"
        transform="translate(-182.08 -247.67)"
        fill="#fff"
      />
      <path
        d="M208.19,308H182.26v-9.42a13.89,13.89,0,0,1,1-5.56,11.33,11.33,0,0,1,2.77-4,11.45,11.45,0,0,1,4.11-2.41,15.31,15.31,0,0,1,5-.8,15.13,15.13,0,0,1,5.35.89,11.19,11.19,0,0,1,6.71,6.61,14.05,14.05,0,0,1,.94,5.27Zm-13-17.12a11,11,0,0,0-3.43.51,7.68,7.68,0,0,0-2.71,1.5,6.66,6.66,0,0,0-1.75,2.43,8.24,8.24,0,0,0-.62,3.26v4.38h17.09v-4.38a7.84,7.84,0,0,0-.66-3.3,6.72,6.72,0,0,0-1.81-2.41,8,8,0,0,0-2.72-1.48A10.85,10.85,0,0,0,195.19,290.86Z"
        transform="translate(-182.08 -247.67)"
        fill="#fff"
      />
      <path
        d="M208.19,281.84H182.26v-5h25.93Z"
        transform="translate(-182.08 -247.67)"
        fill="#fff"
      />
      <path
        d="M208.37,260.34a11.63,11.63,0,0,1-1.12,5.16,12.49,12.49,0,0,1-2.95,4,13.67,13.67,0,0,1-9.08,3.49,12.93,12.93,0,0,1-5-1,13.7,13.7,0,0,1-4.2-2.66,12.67,12.67,0,0,1-2.9-4,11.92,11.92,0,0,1-1.08-5.07,11.34,11.34,0,0,1,1.15-5.13,12.76,12.76,0,0,1,3-4,13.85,13.85,0,0,1,4.24-2.56,13.29,13.29,0,0,1,4.82-.91,13.12,13.12,0,0,1,4.94,1,13.47,13.47,0,0,1,4.17,2.63,12.8,12.8,0,0,1,2.88,4A12,12,0,0,1,208.37,260.34Zm-13.15,7.52a10.42,10.42,0,0,0,3.25-.51,8.52,8.52,0,0,0,2.78-1.48,7.3,7.3,0,0,0,1.93-2.37,6.8,6.8,0,0,0,.73-3.2,6.9,6.9,0,0,0-.74-3.23,7.37,7.37,0,0,0-2-2.37,8.8,8.8,0,0,0-2.8-1.46,10.29,10.29,0,0,0-3.16-.5,10.14,10.14,0,0,0-3.24.53,9.17,9.17,0,0,0-2.78,1.5,7.38,7.38,0,0,0-1.92,2.37,7,7,0,0,0-.71,3.16,6.86,6.86,0,0,0,.75,3.25,7.23,7.23,0,0,0,2,2.37,8.77,8.77,0,0,0,2.78,1.45A10.26,10.26,0,0,0,195.22,267.86Z"
        transform="translate(-182.08 -247.67)"
        fill="#fff"
      />
    </g>
  </svg>
)
const SideBar = () => {
  return (
    <Box h="100vh" bg="black" pos="fixed" bottom="0" zIndex="4">
      <Flex flexDir="column" height="92vh" justifyContent="space-around">
        <Box h="20vh"></Box>
        <Box p={4}>
          <Link as={GLink} to="/">
            <Icon as={Logo} />
          </Link>
        </Box>
        <VStack>
          <Tooltip
            label="Twitter"
            placement="right"
            bg="transparent"
            color="white"
            fontWeight="700"
            zIndex="10"
          >
            <Link href={config.social.twitter}>
              <Icon as={FaTwitter} color="white" />
            </Link>
          </Tooltip>
          <Tooltip
            label="Instagram"
            placement="right"
            bg="transparent"
            color="#c4c4c4"
            fontWeight="700"
          >
            <Link href={config.social.instagram}>
              <Icon as={FaInstagram} color="#c4c4c4" />
            </Link>
          </Tooltip>
          <Tooltip
            label="Facebook"
            placement="right"
            bg="transparent"
            color="#c4c4c4"
            fontWeight="700"
          >
            <Link href={config.social.facebook}>
              <Icon as={FaFacebook} color="#c4c4c4" />
            </Link>
          </Tooltip>
          <Tooltip
            label="Behance"
            placement="right"
            bg="transparent"
            color="#c4c4c4"
            fontWeight="700"
          >
            <Link href="">
              <Icon as={FaBehance} color="#c4c4c4" />
            </Link>
          </Tooltip>
        </VStack>
      </Flex>
    </Box>
  )
}

export default SideBar
