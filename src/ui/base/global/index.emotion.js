import React from 'react'
import { Global, css } from '@emotion/core'

import { minireset } from './minireset'
import { Generic } from './generic'

const GlobalStyles = () => (
  <Global
    styles={css`
      ${minireset}
      ${Generic}
    `}
  />
)

export default GlobalStyles
