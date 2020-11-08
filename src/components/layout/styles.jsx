import * as React from 'react'
import { Global as GlobalStyles, css } from '@emotion/core'
import reset from 'emotion-reset'

const Global = () => (
  <GlobalStyles
    styles={css`
        ${reset}

        *, *::after, *::before {
          box-sizing: border-box;
          -moz-osx-font-smoothing: grayscale,
          -webkit-font-smoothing: antialiased,
          font-smothing: antialiased
        }
      `}
  />
)

export default Global
