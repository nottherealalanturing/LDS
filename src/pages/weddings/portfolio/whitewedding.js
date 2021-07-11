import { useBreakpoint } from "@chakra-ui/react"
import { graphql } from "gatsby"
import React from "react"
import {
  WeddingPorfolioLandscape,
  WeddingPortfolioPortrait,
} from "../../../components/wedding-porfolio-category"

export default function WeddingPortFolio({ data, location }) {
  const breakpoint = useBreakpoint()

  return breakpoint === "sm" ||
    breakpoint === "base" ||
    breakpoint === "md" ||
    breakpoint === "dn" ||
    breakpoint === "lg" ? (
    <WeddingPortfolioPortrait
      content={data}
      path={location.pathname}
      category="White Wedding"
    />
  ) : (
    <WeddingPorfolioLandscape
      content={data}
      path={location.pathname}
      category="White Wedding"
    />
  )
}

export const pageQuery = graphql`
  query {
    allCloudinaryMedia(filter: { public_id: { regex: "assets/WWPP/" } }) {
      edges {
        node {
          secure_url
          public_id
        }
      }
    }
  }
`
