import React from "react"
import { Link as GLink } from "gatsby"
import { Link } from "@chakra-ui/react"

const LinkItem = ({ children, cln }) => {
  return (
    <Link
      as={GLink}
      to={"/"}
      /* activeClassName={containerStyles.active} */
      _focus={{}}
      className={cln}
    >
      {children}
    </Link>
  )
}

export default LinkItem
