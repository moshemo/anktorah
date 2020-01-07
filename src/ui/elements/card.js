import styled from 'styled-components'
import { variant } from 'styled-system'

import { Box } from './box'

export const Card = styled(Box)`
  ${variant({
    scale: 'cards',
    variants: {
      base: {},
      medium: {},
    },
  })}
`
Card.defaultProps = {
  variant: 'base',
}
