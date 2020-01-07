import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'

import { Box } from './box'

const Link = (props, ref) => <Box as="a" ref={ref} variant="link" {...props} />

const GLink = (props, ref) => (
  <Box as={GatsbyLink} ref={ref} variant="link" {...props} />
)

const forwardedLink = React.forwardRef(Link)
const forwardedGLink = React.forwardRef(GLink)

export { forwardedLink, forwardedGLink }
