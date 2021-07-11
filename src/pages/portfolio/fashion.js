import { useBreakpoint } from "@chakra-ui/react"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import {
  PorfolioLandscape,
  PortfolioPortrait,
} from "../../components/porfolio-category"

export default function Beauty({ location }) {
  const data = useStaticQuery(graphql`
    query {
      allCloudinaryMedia(
        filter: { public_id: { regex: "assets/portfolio/fashion/" } }
      ) {
        edges {
          node {
            secure_url
            public_id
          }
        }
      }
    }
  `)
  const breakpoint = useBreakpoint()

  return breakpoint === "sm" ||
    breakpoint === "base" ||
    breakpoint === "md" ||
    breakpoint === "dn" ||
    breakpoint === "lg" ? (
    <PortfolioPortrait
      content={data}
      path={location.pathname}
      category={"Fashion"}
    />
  ) : (
    <PorfolioLandscape
      content={data}
      path={location.pathname}
      category={"Fashion"}
    />
  )
}
