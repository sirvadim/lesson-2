import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@ui/theme'
import { Body2, Body2Failure, Body2Success } from '@ui/atoms/Typography'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 16px;
`

export const RequestStatus = ({
  status,
  loadingMessage,
  successMessage,
  failureMessage,
}) => (
  <Container>
    {status === 'loading' ? <Body2>{loadingMessage}</Body2> : null}
    {status === 'failure' ? (
      <Body2Failure>{failureMessage}</Body2Failure>
    ) : null}
    {status === 'success' ? (
      <Body2Success>{successMessage}</Body2Success>
    ) : null}
  </Container>
)

RequestStatus.propTypes = {
  status: PropTypes.oneOf(['loading', 'success', 'failure']),
  loadingMessage: PropTypes.string,
  successMessage: PropTypes.string,
  failureMessage: PropTypes.string,
}
