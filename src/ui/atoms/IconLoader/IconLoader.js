import React from 'react'
import PropTypes from 'prop-types'
import { styled, withTheme } from '@ui/theme'

const Container = styled.div`
  width: 18px;
  height: 18px;
  animation: rotating 1.2s linear infinite;

  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

export const IconLoader = withTheme(({ color, theme }) => (
  <Container>
    <svg width={18} height={18} fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 0h1a9 9 0 1 1-9 9V8h2v1a7 7 0 1 0 7-7H8V0z"
        fill={color ? color : theme.pallete.gray2}
      />
    </svg>
  </Container>
))

IconLoader.propTypes = {
  color: PropTypes.string,
}
