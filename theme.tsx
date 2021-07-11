import { extendTheme, ThemeConfig } from "@chakra-ui/react"
import { mode, createBreakpoints } from "@chakra-ui/theme-tools"

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const styles = {
  global: props => ({
    body: {
      color: mode("c4c4c4", "c4c4c4")(props),
      bg: mode("black", "black")(props),
    },
  }),
}

const breakpoints = createBreakpoints({
  sm: "320px",
  /* md: "768px", */
  dn: "381px",
  md: "481px",
  lg: "769px",
  xl: "992px",
  "2xl": "1201px",
  /* xl: "1025px", */
})

const theme = extendTheme({
  styles,
  config,
  breakpoints,
  fonts: {
    heading: "Raleway",
    body: "Raleway",
  },
  components: {
    Button: {
      baseStyle: {
        _focus: {},
      },
    },
    Link: {
      baseStyle: {
        textDecoration: "none",
      },
    },
  },
})

export default theme
